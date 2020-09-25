const generateMarkdown = require('./generatemarkdown');
const inquirer = require('inquirer');
const fs = require ('fs');
// array of questions for user
const questions = [
{
    type: "input",
    message: "What is your project title?",
    name:"title"
},
{
    type: "input",
    message: "What is your GitHub user name?",
    name: "user"
},
{
    type: "input",
    message: "What is the name of your repository?",
    name: "repository"
},
{
    type: "input",
    message: "What is the description of your project?",
    name: "description"
},
{
    type: "input",
    message:"What are  your installation instructions?",
    name: "installation"
},
{
    type: "input",
    message:"What are you usage instructions?",
    name:"instructions"
},
{
    type: "list",
    message:"What license are you using?",
    name:"license",
    choices: ["MIT", "Apache", "BSD"]
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
    message:"What is the best email address for asking you questions about this project?",
    name:"questions"
}

];
inquirer
.prompt(questions).then(response =>{
    const readme = generateMarkdown(response);
    console.log(response);
    fs.writeFile('readme.md', readme, function(err){
        if (err) throw err;
    })
}) 