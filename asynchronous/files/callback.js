const fs = require("fs");



function print(err, data) {
  if (err) throw err;
  console.log(data);
}

fs.readFile("a.txt", "utf8", print); // Asynchronous read with callback
fs.readFile("b.txt", "utf8", print); // Asynchronous read with callback

// Asynchronous read with callback
fs.readFile("a.txt", "utf8", (err, data1) => {
  if (err) throw err;
  console.log(data1); // Print content of a.txt
});

fs.readFile("b.txt", "utf8", (err, data2) => {
  if (err) throw err;
  console.log(data2); // Print content of b.txt
});

// // Synchronous read
// const data2 = fs.readFileSync("b.txt", "utf8"); // Synchronous read
// console.log(data2); // Print content of b.txt
