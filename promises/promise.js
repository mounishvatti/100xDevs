// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
// setTimeoutPromisified(3000).then(callback)

// function promise(){
//   return new Promise(function(resolve, reject){
//       setTimeout(function(){
//           resolve('called after few seconds');
//       }, 1000);
//   });
// }

// promise().then(function(result){
//   console.log(result);
// });

//callback
// function callback() {
//   console.log("3 seconds have passed");
// }

// setTimeout(callback, 3000);

//promise
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("3 seconds have passed");
//     resolve({ username: "john", password: "1234" });
//     reject("error occured something went wrong");
//   }, 3000);
// })
//   .then(function (user) {
//     console.log(user);
//     return user;
//   })
//   .then(function (user) {
//     console.log(user.username);
//     console.log(user.password);
//   });


// function random(){

// }

// const p = new Promise(random);
// console.log(p);


const promise1 = new Promise(function(resolve, reject){
  setTimeout(function(){
      resolve({username: "Mounish", password : "7373"});
  }, 1000);
});

promise1.then(function(user){
  console.log(user);
  return user;
}).then(function(user){
  console.log(user.username);
  console.log(user.password);
}).catch(function(error){
  console.log(error);
}).finally(function(){
  console.log("Either the promise is fulfilled or rejected");
});