const Ex12Event = require("events");
const fs = require("fs");

class Ex12Class extends Ex12Event {
  constructor() {
    super();
    this.onEx12PrintToFile();
  }

  onEx12PrintToFile() {
    this.on("printInfo", (fileName, info) => {
      fs.writeFile(`${fileName}.txt`, `${info}`, () => {});
    });
  }
  emitEx12PrintToFile(fileName,info) {
    this.emit("printInfo", fileName,info);
  }
}
module.exports = new Ex12Class();
