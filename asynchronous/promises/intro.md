callbacks vs promises

```js
function callback(){
    console.log('calling after few seconds');
}

setTimeout(callback, 1000);

```


```js
function promise(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('called after few seconds');
        }, 1000);
    });
}

promise().then(function(result){
    console.log(result);
});
```