const fs = requireZ('fs');
const inquirer = require("inquirer");
const generateLogo = require('./lib/shapes.js');

const userInput = [
    {
        type: 'input',
        message: 'Which 3 characters would you like on your logo?',
        name: 'characters'
    },
    {
        type: 'input',
        message: 'What color would you like your text to be?',
        name: 'text-color'
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
        name: 'shape-color'
    },
    {
        type: 'input',
        message: 'Which 3 characters would you like on your logo?',
        name: 'characters'
    },

];


