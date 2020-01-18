const chalk = require("chalk");


class Person {
    constructor(name, favoriteColors) {
        this.name = name;
        this.favoriteColors = favoriteColors;
        

    }

    speak() {

        
        console.log(chalk.hex(this.favoriteColors)(this.name));   
        
    }

}

module.exports = Person;
