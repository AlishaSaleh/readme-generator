// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title to your project'
        // compulsory: validate
    }, {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.'
        // compulsory: validate
    }, {
        type: 'input',
        name: 'installation',
        message: 'Please provide the steps to install your application.'
    }, {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for usage.'
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
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
