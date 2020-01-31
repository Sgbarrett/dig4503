const Express = require("express");
const App = Express();
const port = 80;


App.use(Express.static("client/build"));

App.get("/api", function(req, res) {
    res.send("Hello, world!");
});


App.listen(port, function()  {
        console.log("server running!");
});