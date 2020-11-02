const test = require("test");

module.exports = {
  main: function (event, context) {
    test.printMsg();
    return "Hello Wordl!";
  },
};
