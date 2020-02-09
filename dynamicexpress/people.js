const Person = require("./person.js")
const faker = require('faker');


class People {
    constructor()   {
        
        let people = [];

        for(let i = 0; i < 99; i++) {
            let Name = faker.name.findName();
            let Color = faker.commerce.color();
            people.push(new Person(Name, Color));
            
        }
    
        readColor(req) {
            let result = {"error":  "can't find!"};
            people.forEach((value)=>  {
                if(value.color == req.params.color) {
                   
                    result = value;
                    }    
                });
        
            
        });



        }
    }
}