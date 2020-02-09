const express = require ("express");
const App = express();
const port = 80;

const People = require("./people");
let people = new People();


App.get("/people/name/:name", (req, res) => {
        for (let i = 0; i < people.length; i++) {
            if(req.params.name == people[i].name)  {
                res.send(people[i]);
            }
        }
});

App.get("/people/color/:color", (req, res) =>  {

    res.send(people.readColor(req));  
});


App.Listen(port, () => {
    console.log("server running!");
});