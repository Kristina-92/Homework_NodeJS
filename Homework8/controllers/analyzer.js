// const parseTemplate = async (template, text = null) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(
//       `${__dirname}/../views/${template}.html`,
//       "utf-8",
//       (err, content) => {
//         if (err) return reject(err);
//         if (text) {
//           //{{mesto kade mozeme da napravime regex}}
//           const totalChars = text.length;
//           const words = text.split(/\s+/).filter(Boolean);
//           const totalWords = words.length;
//           const shortWords = words.filter((word) => word.length < 5).length;
//           const longWords = words.filter((word) => word.length > 5).length;
//           const equalWords = words.filter((word) => word.length === 5).length;

//           const sentences = text.split(/[.!?]/).filter(Boolean);
//           const totalSentences = sentences.length;

//           const startsWithVowels = words.filter((word) =>
//             /^[aeiou]/i.test(word)
//           ).length;
//           for (d in data) {
//             console.log("Kluc", d);
//             console.log("Vrednost", data[d]);
//             content = content.replace(`{{${d}}}`, data[d]);
//           }
//         }
//         return resolve(content);
//       }
//     );
//   });
// };

const fs = require("fs");

const getText = async (req, res) => {
  try {
    const output = await parseTemplate("text");
    return res.status(200).send(output);
  } catch (err) {
    return res.status(500).send("Invalid server error!");
  }
};

const postTextAnalysis = async (req, res) => {
  try {
    const { text } = req.body;
    const analysis = analyzeText(text);
    const result = await parseTemplate("text_analysis", analysis);
    console.log(analysis);
    return res.status(200).send(result);
  } catch (err) {
    return res.status(400).send("Erros accessing analysis result!");
  }
};

const analyzeText = (text) => {
  const textTrim = text.trim();

  const words = textTrim.split(/\s+/);
  // console.log("all words", words);
  const sentences = textTrim
    .split(/[.!?]/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence !== "");
  // console.log("sentences", sentences);

  let totalCharacters = textTrim.length;
  let wordsShorterThanFive = 0;
  let wordsLongerThanFive = 0;
  let wordsExactlyFive = 0;
  let wordsStartingWithVowel = 0;

  words.forEach((word) => {
    const wordCleared = word.replace(/[^\w]/g, "");
    // console.log("words", wordCleared);
    if (wordCleared.length < 5) wordsShorterThanFive++;
    if (wordCleared.length > 5) wordsLongerThanFive++;
    if (wordCleared.length === 5) wordsExactlyFive++;
    if (/^[aeiou]/i.test(wordCleared)) wordsStartingWithVowel++;
  });
  const totalWords = words.length;

  return {
    text,
    totalCharacters,
    wordsShorterThanFive,
    wordsLongerThanFive,
    wordsExactlyFive,
    totalSentences: sentences.length,
    totalWords,
    wordsStartingWithVowel,
  };
};

const parseTemplate = async (template, data = null) => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      `${__dirname}/../views/${template}.html`,
      "utf-8",
      (err, content) => {
        if (err) return reject("Template parsing error", err.message);
        if (data) {
          for (const key in data) {
            console.log("key:", key);
            console.log("data:", data[key]);
            content = content.replace(`{{${key}}}`, data[key]);
          }
        }
        return resolve(content);
      }
    );
  });
};

module.exports = { getText, postTextAnalysis };
