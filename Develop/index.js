const generateMarkdown = require('./generatemarkdown');
const inquirer = require('inquirer');

// array of questions for user
const questions = [
{
    type: "input",
    message: "What is your project title?",
    name:"title"
},
{
    type: "input",
    message: "What is the description of your project?",
    name:"description"
},
{
    type: "input",
    message:"What are  your installation instructions?",
    name:"installation"
},
{
    type: "input",
    message:"What are you usage instructions?",
    name:"instructions"
},
{
    type: "input",
    message:"What license are you using?",
    name:"license"
},
{
    type: "input",
    message:"What contributors will you list in your project?",
    name:"contributors"
},
{
    type: "input",
    message:"What tests would you like to include?",
    name:"tests"
},
{
    type: "input",
    message:"What questions would you like to include?",
    name:"questions"
}

];
inquirer
.prompt(questions).then(response =>{
    console.log(response);
}) 
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
