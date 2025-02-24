// 1. ^((0[1-9])|([1-2][0-9])|(3[0-1]))-((0[1-9])|(1[0-2]))-(1[89]|20)([0-9]{2})$ => basic date format dd-mm-yyyy

// 2. ^4\d{3}\s\d{4}\s\d{4}\s\d{4}$ => visa card number format (16 digits)

// 3. ^([0-1]?[0-9]|2[0-3]):([0-5]?[0-9])$ => 24 Hour format

// 4. ^(0[1-9]|1[0-2]):([0-5][0-9])\s(AM|PM)$ => 12 Hour format

// 5. ^[a-zA-Z]+$ => match a word (only lower and uppercase letters)

// 6. ^\w{7,}$ => match a word with at least 7 characters (numbers, underscore, letters)

// 7. ^\+(389\s+7[0-9]{1})\s[0-9]{3}\s[0-9]{3}$ => MK mobile phone number format

// 8. ^\b[aeiouAEIOU][a-zA-Z]\*\b => matches a word that starts withh a vowel

// 9. ^https?:\/\/(?:www\.)?[A-Za-z0-9-]+\.[a-zA-Z]{2,}$ => matches url format

// 10. ^\w+(-)?\w+\.(gif|jpg|jpeg|png)$ => matches img file formats

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/personal-info") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      try {
        const parsedData = JSON.parse(data);
        console.log(parsedData);

        const nameRegex = /^[a-zA-Z]+$/g;
        const phoneNumberRegex = /^\+(389\s+7[0-9]{1})\s[0-9]{3}\s[0-9]{3}$/g;

        if (
          nameRegex.test(parsedData.name) &&
          phoneNumberRegex.test(parsedData.phone)
        ) {
          res.end("Regex is good");
        } else {
          res.end("Regex has a mistake in name of phone format");
        }
      } catch (error) {
        console.log("Error parsing data:", error);
        res.end("Data cannot be parsed");
      }
    });
  } else {
    res.end("Invalid url");
  }
});

server.listen(9090, () => console.log("Server is listening on port 9090"));
