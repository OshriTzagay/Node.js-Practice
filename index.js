const fs = require("fs");
const EventEmitter = require("events");
// let arr = [];
// for (let i = 0; i < 14; i++) {
//   arr.push(i)
//   fs.writeFile("./theLoop.txt", `${arr}`, () => {});
// }

// fs.readFile('./theLoop.txt',(err,res)=>{
//     if (err) throw err

//     console.log(res.toString());
// })

// let arrNames = ["Itzik","Shmolik","Avtamo","Yehuda"]
// console.log(arrNames);
// let arr = [];
// for (let i = 0; i < 16; i++) {
//   arr.push(Math.floor(Math.random() * 10));
//   if (arr[i] % 2 == 0) {
//     console.log(arr[i]);
//   }
// }
// fs.writeFile('./Test.txt',"writeeeeeeeee",()=>{});

// let NamesArray = ["Osh", "Tzug", "Asmamao", "Gashoo"];

// // fs.writeFile("./ex4NamesArray.txt", `${NamesArray}`, () => {});

// fs.readFile("./ex4NamesArray.txt", (err, res) => {
//   if (err) throw err;

//   let arrFromFile = res.toString().split(",");
//   arrFromFile.forEach((item) => {
//     if (item[0].toLocaleLowerCase() == "a") console.log(item);
//   });
// });

// let arrOfNums = [];
// for (let i = 0; i < 12; i++) {
//   arrOfNums.push(Math.floor(Math.random() * 100));
//   arrOfNums.forEach((item) => {
//     if (item % 3 == 0) {
//       fs.writeFile("./Ex5Numbers.txt", arrOfNums.toString(), () => {});
//     }
//   });
// }

// fs.readFile("./Ex5Numbers.txt", (err, res) => {
//   if (err) throw err;

//   let arrFromFile = res.toString().split(",");

//   arrFromFile.forEach((item) => {
//     if (parseInt(item) < 50) {
//       console.log(item);
//     }
//   });
// });

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!~~~EVENTS~~~!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ///!With-out Arguments.
// let ex6Event = new EventEmitter();

// ex6Event.on('helloEve',()=>{
//   console.log("HELLO EVENT ACTIVATED!");
// });
// ex6Event.emit('helloEve');

// ///!With Arguments.
// let ex7Event = new EventEmitter();

// ex7Event.on('printName',(arg)=>{
//   console.log(`Hello ${arg} You MFer`);
// })

// ex7Event.emit('printName',"Tzugi")

// const myEvent = require("./MyEventClass.js");
// myEvent.emitPrintName("NIGGGAAAAA");

// const myEvent2 = require("./MyEventClass");
// myEvent2.emit("IMMMAA MESsAGE!@!~#$");

// const Ex11Event = require("./MyEventClassOnFiles.js");
// Ex11Event.emitPrintFile("I'm E11 Emit MSG!");

// const Ex12Eventer = require("./Ex12Event");

// Ex12Eventer.emitEx12PrintToFile("Ex12", "zzzzzzzzzzz");

// const Ex13eventer = require("./Ex13Event");
// Ex13eventer.emit("printNames", "dsadsa", "xzxczxz", "zzzzzzzzzzz");

///!Finished Ex13

const Ex14eventlistener = require('./Ex14Event');
Ex14eventlistener.emit('printAges',2,22,63,4,55,11,100);

