const fs = require("fs");

const getForm = (req, res) => {
  res.render("form");
};

const getStudents = async (req, res) => {
  try {
    let studentData = await read("studenti.json");
    res.render("students", { studentData });
    console.log(studentData);
  } catch (err) {
    console.error("Error fetching students data", err.message);
  }
};

const postForm = async (req, res) => {
  try {
    const { ime, prezime, prosek } = req.body;
    const students = await read("studenti.json");
    const newStudent = { ime, prezime, prosek };
    students.push(newStudent);
    // console.log(newStudent);
    await saveStudents(students);
    res.redirect("/studenti");
  } catch (err) {
    res.status(500).send("Error retrieving students");
  }
};

const getBrishi = async (req, res) => {
  const index = parseInt(req.query.i);
  // console.log("index type", typeof index);
  try {
    const students = await read("studenti.json");

    let deletedStudent = students.splice(index, 1);
    // console.log(deletedStudent);
    await saveStudents(students);
    // console.log(students);
    res.redirect("/studenti");
  } catch (err) {
    res.status(500).send("Error deleting student");
  }
};

const read = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) return reject(err);
      data = JSON.parse(data);
      return resolve(data);
    });
  });
};

const write = async (fileName, data) => {
  data = JSON.stringify(data);
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
};

const saveStudents = async (students) => {
  try {
    await write("studenti.json", students);
  } catch (err) {
    console.error("Error saving students:", err.message);
  }
};

module.exports = { getForm, getStudents, postForm, getBrishi };
