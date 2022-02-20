const EventEmitter = require("events");

class myEventClass extends EventEmitter {
  constructor() {
    super();
    this.onPrintName();
  }

  onPrintName() {
    this.on("printName", (data) => {
      console.log(`Hello Mf,Your Name: ${data}`);
    });
  }
  emitPrintName(data) {
    this.emit("printName", data);
  }
}

module.exports = new myEventClass();


// class EventClass2 extends EventEmitter{
//     constructor(){
//         super();
//     }
//     onPrintMessage(){
//         this.on('message',(msg)=>{
//         console.log(msg);
//         })
//     }
//     emitPrintMessage(somMsg){
//         this.emit('message',somMsg);
//     }
// }
// module.exports = new EventClass2();
