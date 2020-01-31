const Express = require("express");
const App = Express();
const port = 80;

App.listen(port, function(){
    console.log("server Running!");
});



App.get('/', function(Request, Response) {
    Response.send("hello world!");
});


App.use("/public", Express.static('public'));

