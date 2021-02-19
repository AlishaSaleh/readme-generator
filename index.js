// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title to your project',
        // compulsory: validate
        validate: (answer) => {
            if (answer) {
                return true;
            } else {
                return console.log('Not a valid title. Please try again.');
            } 
        }
    }, {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.',
        // compulsory: validate
        validate: (answer) => {
            if (answer) {
                return true;
            } else {
                return console.log('Not a valid description. Please try again.');
            } 
        }
    }, {
        type: 'input',
        name: 'installation',
        message: 'Please provide the steps to install your application.'
    }, {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for usage.'
    }, {
        type: 'input',
        name: 'credits',
        message: 'Please credit any collaborators with their GitHub usernames.'
    }, {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project.',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0',
            'MIT License', 'Mozilla Public License 2.0', 'Open Software License 3.0']
        // add more?
    }, {
        type: 'input',
        name: 'contributing',
        message: 'Please provide guidelines on how other developers can contribute to your project.'
    }, {
        type: 'input',
        name: 'tests',
        message: 'Please provide examples of tests and how to run them.'
    }, {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: (answer) => {
            if (answer) {
                return true;
            } else {
                return console.log('Not a valid username. Please try again.');
            } 
        }
    }, {
        type: 'input',
        name: 'profile',
        message: 'What is the URL to your GitHub profile?',
        validate: (answer) => {
            if (answer) {
                return true;
            } else {
                return console.log('Not a valid URL. Please try again.');
            } 
        }
    }, {
        type: 'input',
        name: 'email',
        message: 'Please an email and instructions on how to contact you with additional questions'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
        err ? console.log(err) : console.log('Success! Your README file has been generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    const userInput = inquirer.prompt(questions)

    
    .then((userInput) => {
        writeToFile('Example.md', userInput)

    })
 }

// Function call to initialize app
init();
