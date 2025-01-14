const fs = require("fs");
const readline = require("readline");
const lodash = require("lodash");

const readFileContentsLineByLine = (fileName, cb) => {
  try {
    let fileContents = [];

    const rl = readline.createInterface({
      input: fs.createReadStream(fileName),
      output: process.stdout,
      terminal: false,
    });

    rl.on("line", (line) => {
      fileContents.push(line);
    });

    rl.on("close", () => {
      cb(null, fileContents);
    });

    rl.on("error", (err) => {
      cb(err, null);
    });
  } catch (err) {
    cb(err, null);
  }
};

const filterFemaleCandidates = (fileContents, cb) => {
  try {
    let filteredData = fileContents.filter((line) => {
      const fields = line.split(",").map((field) => field.trim());
      return fields[1] === "female" && fields[5] === "southwest";
    });

    cb(null, filteredData);
  } catch (err) {
    cb(err, null);
  }
};

const writeFilteredDataToFile = (outputFileName, filteredData, cb) => {
  try {
    fs.writeFile(outputFileName, filteredData.join("\n"), "utf8", (err) => {
      if (err) {
        return cb(err, null);
      }
      cb(null, "Successfully wrote filtered data to output file!");
    });
  } catch (err) {
    cb(err, null);
  }
};

const readFileContentsUsingStream = (fileName, cb) => {
  try {
    let fileContents = [];
    let remaining = "";
    let isHeader = true;

    const stream = fs.createReadStream(fileName, "utf8");

    stream
      .on("data", (chunk) => {
        remaining += chunk;
        let lines = remaining.split("\n");
        remaining = lines.pop();

        if (isHeader) {
          lines.shift();
          isHeader = false;
        }

        fileContents = fileContents.concat(lines.filter((line) => line.trim() !== ""));
      })
      .on("end", () => {
        if (remaining.trim() !== "") {
          fileContents.push(remaining.trim());
        }

        cb(null, fileContents);
      })
      .on("error", (err) => {
        cb(err, null);
      });
  } catch (err) {
    cb(err, null);
  }
};



const filterDataWithNoChildren = (fileContents, cb) => {
  try {
    let filteredData = fileContents.filter((line) => {
      const fields = line.split(",").map((field) => field.trim());
      return fields[3] === "0";
    });

    cb(null, lodash.compact(filteredData));
  } catch (err) {
    cb(err, null);
  }
};

module.exports = {
  readFileContentsLineByLine,
  filterFemaleCandidates,
  readFileContentsUsingStream,
 }
