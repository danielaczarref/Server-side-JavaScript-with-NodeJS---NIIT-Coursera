const fs = require("fs");
const lodash = require("lodash");

const read = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (error, data) => {
      if (error) {
        reject("Encountered error while reading file contents..!");
      }
      resolve(data);
    });
  });
};

const convertToUpperCase = (fileContents) => {
  return new Promise((resolve) => {
    const lines = lodash.split(fileContents, ",");
    const trimmedLines = lodash.map(lines, (line) => lodash.trim(line));
    const upperCaseLines = lodash.map(trimmedLines, lodash.toUpper);
    resolve(upperCaseLines);
  });
};

const readAndConvertFileContents = (fileName, cb) => {
  read(fileName)
    .then((fileContents) => {
      return convertToUpperCase(fileContents);
    })
    .then((convertedContents) => {
      console.log(convertedContents)
      cb(null, convertedContents);
    })
    .catch((error) => {
      cb(error, null);
    });
};

module.exports = {
  readAndConvertFileContents,
};
