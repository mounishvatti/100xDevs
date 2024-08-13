const fs = require("fs");

// promisified read file
const promisifiedReadFile = function (filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf8", function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

promisifiedReadFile("file1.txt").then(function (data) {
  console.log(data);
});

promisifiedReadFile("file2.txt").then(function (data) {
  console.log(data);
});

// clear the whitespaces from the file and write it to the same file
function clearFile(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf8", function (err, data) {
      if (err) {
        reject(err);
      } else {
        data = data.replace(/\s/g, "");
        fs.writeFile(filePath, data, function (err) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      }
    });
  });
}

clearFile("file1.txt").then(function (data) {
  console.log(data);
});

clearFile("file2.txt").then(function (data) {
  console.log(data);
});
