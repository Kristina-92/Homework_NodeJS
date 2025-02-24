const http = require("http");

const handler = (req, res) => {
  const [_, op, num1, num2] = req.url.split("/");

  let result;
  switch (op) {
    case "sobiranje":
      result = Number(num1) + Number(num2);
      res.end(`${result}`);
      break;
    case "odzemanje":
      result = Number(num1) - Number(num2);
      res.end(`${result}`);
      break;
    case "mnozenje":
      result = Number(num1) * Number(num2);
      res.end(`${result}`);
      break;
    case "delenje":
      result = Number(num1) / Number(num2);
      res.end(`${result}`);
      break;
    case "modulus":
      result = Number(num1) % Number(num2);
      res.end(`${result}`);
      break;
    case "exponentiation":
      result = Number(num1) ** Number(num2);
      res.end(`${result}`);
      break;
    default:
      res.end("Calculator!");
      break;
  }
};

const newServer = http.createServer(handler);

newServer.listen(9000, () => console.log("Server is listening on port 9000"));
