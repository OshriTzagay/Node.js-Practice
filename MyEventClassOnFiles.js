const fs = require("fs");
const FileListener = require("events");

class FileListenerClass extends FileListener {
  constructor() {
    super();
    this.onPrintFile();
  }
  onPrintFile() {
    this.on("printFile", (msg) => {
      fs.writeFile("./ex11writeFile.txt", `${msg}`, () => {});
    });
  }
  emitPrintFile(msg) {
    this.emit("printFile", msg);
  }
}
module.exports = new FileListenerClass();
