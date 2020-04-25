const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");


inquirer.prompt ([
  {
  type: "input",
  message: "What is your GitHub username?",
  name: "username"
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is the URL to your project?",
    name: "url"
  },
  {
    type: "input",
    message: "What is the name of your project?",
    name: "name"
  },
  {
    type: "input",
    message: "Write a short description of your project:",
    choices: [],
    name: "description"
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    choices: ["MIT License", "GNU GPLv3", "CC0-1.0", "GNU AGPLv3"],
    name: "license"
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "command"
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "run"
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "knowledge"
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contribution"
  }
]).then (response => {
  let text = "# " + response.name + "\n" + "\n"
  text += "## Description " +  "\n" 
  text += response.description + "\n"
  text += "## Table of Contents" + "\n" + "\n"
  text += " * Installation " + "\n"
  text += " * Usage " + "\n"
  text += " * " + response.license + "\n"
  text += " * Contributing " + "\n" + "\n"
  text += "## Test " + "\n"
  text += " * Command to run test: " + response.run + "\n"
  text += " * Previous knowledge for using repo: " + response.knowledge + "\n"
  text += " * Contributing to the repo: " + response.contribution + "\n" + "\n"
  text += "## GitHub User Information " + "\n" 
  text += " * GitHub username: " + response.username + "\n"
  text += " * GitHub email: " + response.email + "\n"
  text += " * GitHub Project URL: " + response.url




  fs.writeFile("README.md", text, function(err) {
    if (err) {
      return console.log(err)
    }
    console.log("File written")
  })
});

  




    

  

/*
const questions = [
];

function init() {

}

init();
*/