const generateMarkdown = require('generatemarkdown');
const inquirer = require('inquirer');

// array of questions for user
const questions = [
{
    type: "input",
    message: "What is your project title?",
    name:"Title"
}
{
    type: "input",
    message: "What is the description of your project?",
    name:"Description"
}
{
    type: "input",
    message:"What is in your table of contents?",
    name:"Table of Contents"
}
{
    type: "input",
    message:"What are  your installation instructions?",
    name:"Installation"
}
{
    type: "input",
    message:"What are you usage instructions?",
    name:"Instructions"
}
{
    type: "input",
    message:"What license are you using?",
    name:"License"
}
{
    type: "input",
    message:"What contributors will you list in your project?",
    name:"Contributors"
}
{
    type: "input",
    message:"What tests would you like to include?",
    name:"Tests"
}
{
    type: "input",
    message:"What questions would you like to include?",
    name:"Questions"
}

];
inquirer
.prompt({
    //we have an array of questions, so we need to ask them. we
    //could ask them via a loop, 
})
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
