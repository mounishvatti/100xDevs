## Read contents of a file in JavaScript

### Question: Read contents of a file in JavaScript

### Solution:

```js
const fs = require('fs');
const file = fs.readFileSync('file.txt', 'utf8');
console.log(file);
```

