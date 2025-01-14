const fs = require("fs");
const lodash = require("lodash");

const readFileContents = (fileName, cb) => {
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
          cb("Encountered error while reading file contents..!", null);
        });
    } catch (err) {
      cb(err, null);
    }
};

const sortDataOnPrice = (fileContents, cb) => {
  try {
    const parsedData = fileContents.map(item => ({
      ...item,
      retail_price: parseInt(item.retail_price, 10),
    }));

    const sortedData = lodash.sortBy(parsedData, 'retail_price');

    const finalData = sortedData.map(item => ({
      ...item,
      retail_price: item.retail_price.toString(),
    }));

    cb(null, finalData);
  } catch (error) {
    cb(error);
  }
};

const sortDataOnRating = (fileContents, cb) => {
  try {
    const parsedData = fileContents
      .map(item => ({
        ...item,
        product_rating: isNaN(parseFloat(item.product_rating)) || item.product_rating === 'No rating available' ? null : parseFloat(item.product_rating),
      }))
      .filter(item => item.product_rating !== null);

    const finalData = lodash.reverse(lodash.sortBy(parsedData, 'product_rating'))
      .map(item => ({
        ...item,
        product_rating: item.product_rating.toString()
      }));

    cb(null, finalData);
  } catch (error) {
    cb(null, error);
  }
};




const writeSortedDataToFile = (outputFileName, sortedData, cb) => {
  try {
    const dataToWrite = JSON.stringify(sortedData, null, 2);
    fs.writeFile(outputFileName, dataToWrite, (err) => {
      if (err) {
        return cb(err);
      }
      cb(null);
    });
  } catch (error) {
    cb(error);
  }
};





module.exports = {
    readFileContents,
    sortDataOnPrice,
    sortDataOnRating,
}