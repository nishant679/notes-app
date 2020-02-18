const fs = require("fs");
const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes");

//fs.writeFileSync("note.txt", "I am nishant");
//fs.appendFileSync("note.txt", ". I am a student at NIT Trichy");

//console.log(chalk.greenBright("hello Nishant"));

const error = chalk.red.inverse;
const warning = chalk.keyword("orange").bold;

/* console.log(error("Invalid"));
console.log(warning("Please validate your code")); */

yargs.version("1.0.0");
//console.log(yargs.argv);

yargs.command({
  command: "add",
  describe: "adding a new note",
  handler: function() {
    console.log(warning("Add method invoked"));
  }
});

//adding options
const option = process.argv[2];
if (option === "add") {
  notes.addNote("custom title", "created from app interface");
}
