const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");


inquirer.prompt ({
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
  name: "description"
},
{
  type: "list",
  message: "What kind of license should your project have?",
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
}).then (response => {
  let text = response.username + "\n"
  text += response.email + "\n"
  text += response.url + "\n"
  text += response.name + "\n"
  text += response.description + "\n"
  text += response.license + "\n"
  text += response.command + "\n"
  text += response.run + "\n"
  text += response.knowledge + "\n"
  text += response.contribution + "\n"
  
fs.writeFile("README.md"), text, function(err) {
  if (err){
    return console.log(err)
  }
  console.log("Success!")
}
});


const questions = [
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
