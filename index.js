const fs = require('fs');
const inquirer = require("inquirer");
const logoGenerator = require('./lib/shapes');

const userInput = [
    {
        type: 'input',
        message: 'Which 3 characters would you like on your logo?',
        name: 'characters'
    },
    {
        type: 'input',
        message: 'What color would you like your text to be?',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Would you like your shape to be a square, triangle, or a circle?',
        choices: ['square', 'triangle', 'circle'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'What color do you want to shape to be?',  
        name: 'shapeColor'
    },

]; 

function writeToFile(filename, data) {
  const logo = logoGenerator.generateLogo(data);
  fs.writeFile(filename, logo, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`Logo saved to ${filename}`);
    }
  });
}

  
  function init() {
    inquirer
      .prompt(userInput)
      .then((data) => {
        writeToFile('./examples/logo.svg', data);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }
  
  init();    


