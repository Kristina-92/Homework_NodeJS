const fs = require("fs");

const appendText = (path, content) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, content, (err) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
};

module.exports = { appendText };
