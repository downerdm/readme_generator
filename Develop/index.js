//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//An array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Describe any installation instructions',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What will the app be used for?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?',
  },
  {
    type: 'list',
    message: 'What is your license?',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD-2'],
  },
  {
    type: 'input',
    name: 'gitHubUser',
    message: 'What is your gitHub user name?',
  },{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

function writeToFile(data) {
    const markdownData = generateMarkdown(data)
    const filename = "README.md";
    fs.writeFile(filename, markdownData, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  };

//A function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {writeToFile(data)});
}

// Function call to initialize app
init();
