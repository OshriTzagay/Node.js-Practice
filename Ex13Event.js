const Ex13Event = require("events");
const fs = require("fs");
class Ex13Class extends Ex13Event {
  constructor() {
    super();
    this.onPrintArrToFile();
  }
  onPrintArrToFile() {
    this.on("printNames", (...data) => {
      fs.writeFile("./ex13.txt", `${data}`, () => {});
    });
  }
  emitPrintArrToFile(...data) {
    this.emit("printNames", data);
  }
}

module.exports = new Ex13Class();
///!