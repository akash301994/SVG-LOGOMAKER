//Declaration

class Shape {
  constructor(text, textColor, color) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, color) {
    super(text, textColor, color);
  }

  render() {
    return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <polygon points="200,10 280,210 130,210" fill="${this.color}" />


     <text x="205" y="180" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
   </svg>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, color) {
    super(text, textColor, color);
  }

  render() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    
    <rect width="100%" height="100%" fill="${this.color}" />

       <text x="140" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>;
      </svg>`;
  }
}

class Circle extends Shape {
  constructor(text, textColor, color) {
    super(text, textColor, color);
  }

  render() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    
    <circle cx="150" cy="100" r="80" fill="${this.color}" />

       <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>;
      </svg>`;
  }
}


//export classes for index.js
module.exports = { Triangle, Circle, Square };
