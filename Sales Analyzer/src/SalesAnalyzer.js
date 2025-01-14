
const fs = require("fs");
const csvParser = require("csv-parser");
const lodash = require("lodash");

 const readFileContents = (fileName, cb) => {
  try {
    const fileContents = [];

    fs.createReadStream(fileName)
      .pipe(csvParser())
      .on("data", (row) => {
        fileContents.push(row);
      })
      .on("end", () => {
        cb(null, fileContents);
      })
      .on("error", (err) => {
        cb(err, null);
      });
  } catch (err) {
    cb(err, null);
  }
};

const filterData = (fileContents, cb) => {
  try {
    const filteredData = lodash.filter(fileContents, { payment_method: "credit" });
    cb(null, filteredData);
  } catch (err) {
    cb(err, null);
  }
};

const writeFilteredDataToFile = (filteredData, cb) => {
  try {
    const outputFilePath = "output.txt";
    fs.writeFile(outputFilePath, filteredData, "utf8", (err) => {
      if (err) {
        return cb(err, null);
      }
      cb(null, "Successfully wrote filtered data to output.txt file..!");
    });
  } catch (err) {
    cb(err, null);
  }
};


module.exports = {
  readFileContents,
  filterData,
  writeFilteredDataToFile
}
