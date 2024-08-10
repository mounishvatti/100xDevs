// Asynchronous read with promise
const fs = require('fs').promises;

async function readFiles() {
  try {
    const data1 = await fs.readFile('a.txt', 'utf8'); // Asynchronous read
    console.log(data1); // Print content of a.txt

    const data2 = await fs.readFile('b.txt', 'utf8'); // Asynchronous read
    console.log(data2); // Print content of b.txt
  } catch (err) {
    console.error(err);
  }
}

readFiles();