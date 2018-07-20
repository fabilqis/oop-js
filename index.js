// function logName(name){
//     console.log(`My name is ${name}`);
// }

// function insertCustomName(callback){
//     var name = "Billy";
//     callback(name);
// }

// insertCustomName(logName);


// const isMomHappy = true;

// const willGetIphone = new Promise((resolve, reject) => {
//     if (isMomHappy){
//         const phone = {
//             series: "IphoneX",
//             color: "Black"
//         };
//         resolve(phone);
//     }else{
//         const reason = new Error("mom is not happy");
//         reject(reason);
//     }
// });

// const showOff = function(phone){
//     const message = "Hey fella, I have a new" + " " + phone.color + " " + phone.series + " " + "phone";
//     return Promise.resolve(message);
// };

// const askMom = function() {
//     willGetIphone
//     .then(showOff)
//     .then(fulfilled => console.log(fulfilled))
//     .catch(error => console.log(error.message));
// };

// askMom();


// async function myAsyncFunction(){
//     return "theValue";
// }

// function myAsyncFunction(){
//     return Promise.resolve("theValue");
// }
// myAsyncFunction().then(returnedVal => console.log(returnedVal));

// async function my2ndAsyncFunction(){
//     throw "error";
// }

// function my2ndAsyncFunction(){
//     return Promise.reject("error");
// }
// my2ndAsyncFunction().catch(err => console.log(err));

// async function myDate(){
//     try{
//         let dateDetails = await date;
//         let message = await orderUber(dateDetails);
//         console.log(message);
//     } catch(error){
//         console.log(error.message);
//     }
// }

// async function waiting(){
//     let promise = new Promise((resolve, reject)=> {
//         setTimeout(() => resolve("done"),5000)
//     });
//     let result = await promise;
//     alert(result);
// }
// waiting();


// const numberOrNot = (input) => {
//     return new Promise((resolve, reject) => {
//         if (typeof input === "number") {
//             resolve("input is number")
//         } else {
//             reject(Error("input is not number"))
//         }
//     })
// }

// numberOrNot(42).then(Response => console.log(Response)).catch(Error => console.log(Error))
// numberOrNot(true).then(Response => console.log(Response)).catch(Error => console.log(Error))
// numberOrNot("456").then(Response => console.log(Response)).catch(Error => console.log(Error))


// var rejectedPromise = Promise.reject(new Error('Whatever'));
// // equivalent to
// var rejectedPromise = new Promise(function (fulfill, reject) {
//   reject(new Error('Whatever'));
// });