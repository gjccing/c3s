var blockLoader = require("block-loader");
var path = require("path");
var fs = require("fs");
var options = {
  start: "import macro from",
  end: ";",
  process: function fixPreBlocks(file, resource) {
    var filePath = path.join(
      path
        .dirname(resource),
      file
        .substring(17, file.length-1)
        .replace(/^\s*'/, '')
        .replace(/'\s*$/, '')
    );
    return fs.readFileSync(filePath);
  }
};
module.exports = blockLoader(options);
