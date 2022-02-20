const Ex14Eventer = require("events");
const fs = require("fs");

class Ex14Class extends Ex14Eventer {
  constructor() {
    super();
    this.onPrintAges();
  }
  onPrintAges() {
    this.on("printAges", (...ages) => {
      let over18Arr = [];
      ages.forEach((age) => {
        if (age > 18) {
          over18Arr.push(age);
          fs.writeFile("./ex14.txt", `${over18Arr}`, () => {});
        }
      });
    });
  }

  emitPrintAges(...ages) {
    this.emit("printAges", ...ages);
  }
}
module.exports = new Ex14Class();
////!Ex14