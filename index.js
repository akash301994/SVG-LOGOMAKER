//require all neccessary files to be imported

const fs = require('fs');
const inquirer = require("inquirer");
const {Triangle, Circle, Square} = require('./lib/shapes');

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

//geting data from render

function writeToFile(filename, data) {
  const logo = data.render();
  fs.writeFile(filename, logo, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`Logo saved to ${filename}`);
    }
  });
}


//getting all data from classes, structuring them in a if/else. 
  
  function init() {
    inquirer
      .prompt(userInput)
      .then((data) => {
        let shape;
        if (data.shape === 'circle') {
            shape = new Circle (data.characters, data.textColor, data.shapeColor)
        } else if (data.shape === 'triangle') {
          shape = new Triangle (data.characters, data.textColor, data.shapeColor)
        } else {
          shape = new Square (data.characters, data.textColor, data.shapeColor)
        }
        writeToFile('./examples/logo.svg', shape);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }
  
  init();


