const Express = require ('express');
const App = Express();
const port = 80;

const CORS = require('cors');
App.use(CORS());

const MongoDb = require('mongodb');
const MongoClient = MongoDb.MongoClient;

const URL = "mongodb+srv://stephenbarrett:jQVVoSSxw6skjKHZ@cluster0-tc9sb.mongodb.net/"

let collection = null;

MongoClient.connect(URL, (error, connection) =>{
    if(error) {
        throw error;
    }

    let database = connection.db("DIG4503-77");
    let collection = database.collection("Movies");
})


App.get("/movies/title/:title", (req, res) => {
    let result = {"error": "Could not find title!"};
    
    if(collection != null) {
        collection.find({"title": new RegExp(req.params.title)}).limit(100).toArray()
        .then((procesedArray)=> {
            result = processedArray;
            res.json(result);
        });
    } else {
        res.json(result);
    }
    
});

App.listen(port, () => {

});