### Write the contents of a file

Write the contents of a file to another file.

#### Hint

Use the `writeFile` function from the `fs` module.

#### Solution

```js
const fs = require('fs');

fs.writeFile('output.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('The file was saved!');
});
```