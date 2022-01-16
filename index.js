// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "what's your gitHub user name",
        name: "github"
    },
    {
        type: "input",
        message: "what is your project title",
        name: "projectTitle"
    },

    {
        type: "input",
        message: "what is the description",
        name: "description"
    },
    {
        type: "input",
        message: "what are the installation instructions",
        name: "install",
    },

    {
        type: "input",
        message: "how is this used",
        name: "usage",
    },

    {
        type: "input",
        message: "what are the contribution guidelines",
        name: "contribution",
    },

    {
        type: "input",
        message: "what tests were used",
        name: "tests",
    },
    {
        type:'checkbox',
        name: 'license',
        choices: ["MIT", "GPLv3", "GPL"],
        message: 'Pick your License.'
    }

    





];





// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    console.log("creating the readMe file")
    fs.writeFile(fileName,generateMarkdown(data), function(err){
        console.log(err)
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
       
            writeToFile("professionalReadMe.md", answers)
        })
}

// Function call to initialize app
init();
