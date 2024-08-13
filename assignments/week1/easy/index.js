const fs = require('fs');

fs.writeFile('output.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('The file was saved!');
});

const file = fs.readFileSync('file.txt', 'utf8');
console.log(file);