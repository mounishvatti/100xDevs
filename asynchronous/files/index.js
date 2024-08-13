const fs = require('fs');

// const data1 = fs.readFileSync('a.txt', 'utf8'); // asynchronous read
// console.log(data1);

// const data2 = fs.readFileSync('b.txt', 'utf8'); // synchronous read
// console.log(data2);

// fs.readFile is asynchronous and does not return the file contents immediately. Instead, it requires a callback to handle the result once the read is complete.


// fs.readFileSync is synchronous and will block the code execution until the file is read.


// Asynchronous read with callback
fs.readFile('a.txt', 'utf8', (err, data1) => {
  if (err) throw err;
  console.log(data1); // Print content of a.txt
});

// Synchronous read
const data2 = fs.readFileSync('b.txt', 'utf8'); // Synchronous read
console.log(data2); // Print content of b.txt