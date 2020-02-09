const chalk=require("chalk");
const Express=require("express");
const App = Express();
const pokemon=require("json-pokemon");
const port=80;

//create the route and the arrow function 
App.get("/id/:id", (req,res) => {
    //set result variable to the invalid statement
    let result = "The id you have entered is invalid";
        //compare the value to the json-pokemon api
        pokemon.forEach((value)=>{
            //if the id matches an id in the pokemon api change the result to the pokemon info. 
            if(value.id == req.params.id)  {
                result = value;
                    //write to console in green using chalk 
                    console.log(chalk.green(req.path));
         }
    });
        //if the variable result never changed then the entered data is invalid.
    if (result == "The id you have entered is invalid"){
        //print to console in red using chalk 
        console.log(chalk.red(req.path));
    }
    res.send(result);
    
    
});  
// make sure when testing the name entry that the name of the pokemon is capitalized ex. Charmander .______.
// set the route and arrow function 
App.get("/name/:name", (req,res) => {
    //set variable rusult to this name is invalid string
    let result = "The name you have entered is invalid";
    //search pokemon api with the user entered data using the forEach method
    pokemon.forEach((value)=>{
        //if the data entered matches set the variable result to the returned data from the pokemon api 
        if (value.name == req.params.name)  {
            result = value;
            // write the path to console using chalk 
                console.log(chalk.green(req.path));
        }
    });
    // if result isn't set to value, then the entered data is invalid 
    if (result == "The name you have entered is invalid"){
        //write to console using chalk  
        console.log(chalk.red(req.path))
    }
    res.send(result);
    
    
});  


App.listen(port,() => {
    console.log("Server Running!");
});
    
    