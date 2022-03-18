// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type:'input',
    name: 'title',
    message: 'What is the project title?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?'
  },
  {
    type: 'input',
    name: 'Table of Contents,',
    message: 'What is the Table of Contents,?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What is the Installation?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the Usage?'
  },
  {
    type: 'input',
    name: 'license',
    message: 'What is the License?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who is Contributing?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What is the Tests?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the Github username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the email?'
  }
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);
  })

// Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(res=>{
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...res}))
  })
}

// Function call to initialize app
init();

