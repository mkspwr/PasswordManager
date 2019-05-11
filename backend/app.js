const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const Article = require('./models/article');
const Reg = require('./models/Reg');
const RegRoutes = require('./routes/RegRoutes');

const API_PORT = 3000;
const app = express();
app.use(cors());
const router = express.Router();


// connects our back end code with the database

mongoose.connect('mongodb+srv://admin:admin@cluster0-4pnyl.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
     mongoose.connection.once('open', function(){
       console.log('Conection has been made!');
     }).on('error', function(error){
         console.log('Error is: ', error);
     });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/Reg', RegRoutes)



// this is our get method
// this method fetches all available data in our database
app.get("/getData", (req, res) => {
  Article.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    console.log(data);
    return res.json({ data: data });
  });
});

//PostData




const host = '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port,host,function(){
	console.log('Server started on port 3000...')
});
