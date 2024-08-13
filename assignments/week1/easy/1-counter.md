## Create a counter in JavaScript
### Question: Try to code a counter in Javascript It should go up as time goes by in intervals of 1 second

### Solution:

```js
let counter = 0;
const interval = setInterval(() => {
    counter++;
    console.log(`Counter: ${counter}`);
}, 1000);
```

## Counter without setInterval

### Solution:

```js
let counter = 0;

setTimeout(() => {
    counter++;
    console.log(`Counter: ${counter}`);
}, 1000);
```