const fs = require("fs");
const chalk = require("chalk");

//let note = [];

const addNote = function (title, body) {
  //loading the note.json data
  let note = loadData();

  note.push({ title: title, body: body });
  console.log(note);
  saveNote(note);
};

debugger
const listNote = function () {
  const note = loadData();
  //listing out the title
  //const i = note.length;
  for (i = 0; i < note.length; i++) {
    console.log(chalk.blueBright(note[i].title));
  }
};

//saving the note
const saveNote = function (note) {
  const jsonData = JSON.stringify(note);
  const writer = fs.writeFileSync("notes.json", jsonData);
  console.log(chalk.bold.green("note successfully saved"));
};

//loading the data
const loadData = function () {
  try {
    const fileReader = fs.readFileSync("notes.json");
    const jsonData = fileReader.toString;
    const note = JSON.parse(jsonData);
    return note;
  } catch (e) {
    return [];
  }
};

/* addNote("first note", "this is my first note");
addNote("second note", "adding another note to verify");
addNote("super", "Learning node.js is fun"); */

//listing out titles
listNote();

//exporting the functions
module.exports = {
  addNote: addNote,
  listNote: listNote
};
