// MODULES - encapsulated code (only share minimum)
// CommonJs - every file is a module by default

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative");

require("./7-MindGrenade");

sayHi(data.singlePerson.name);
sayHi(names.john);
sayHi(names.jack);
sayHi("ME");
