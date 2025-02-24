const {
  milesToKm,
  celsiusToFahrenheit,
  poundsToKilograms,
  feetToMetres,
  secondsToMinutes,
} = require("./conversion");

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      try {
        const parsedData = JSON.parse(data);
        console.log("parsed data", parsedData);

        switch (req.url) {
          case "/miles-to-km":
            let convertedtoKm = milesToKm(parsedData.miles);
            res.writeHead(200, { "content-type": "text/plain" });
            res.end(
              `${parsedData.miles} miles is equal to ${convertedtoKm} kilometers`
            );
            break;
          case "/celsius-to-fahrenheit":
            let convertedToFahrenheit = celsiusToFahrenheit(parsedData.celsius);
            res.writeHead(200, { "content-type": "text/plain" });
            res.end(
              `${parsedData.celsius} celsius is equal to ${convertedToFahrenheit} fahrenheit`
            );
            break;
          case "/pounds-to-kilograms":
            let convertedToKg = poundsToKilograms(parsedData.pounds);
            res.writeHead(200, { "content-type": "text/plain" });
            res.end(
              `${parsedData.pounds} pounds is equal to ${convertedToKg} kilograms`
            );
            break;
          case "/feet-to-meters":
            let convertedToMeters = feetToMetres(parsedData.feet);
            res.writeHead(200, { "content-type": "text/plain" });
            res.end(
              `${parsedData.feet} feet is equal to ${convertedToMeters} meters`
            );
            break;
          case "/seconds-to-minutes":
            let convertedToMinutes = secondsToMinutes(parsedData.seconds);
            res.writeHead(200, { "content-type": "text/plain" });
            res.end(
              `${parsedData.seconds} seconds is equal to ${convertedToMinutes} minutes`
            );
            break;
          default:
            res.writeHead(400, { "content-type": "text/plain" });
            res.end("Invalid URL");
        }
      } catch (error) {
        console.log("Error parsing data:", error);
        res.writeHead(400, { "content-type": "text/plain" });
        res.end("Data cannot be parsed");
      }
    });
  }
});

server.listen(5050, () => console.log("Server is running on port 5050"));
