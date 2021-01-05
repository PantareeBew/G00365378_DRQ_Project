const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require('path');

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())

//connect to mongoDB
const myConnectionString = 'mongodb+srv://admin:776636@cluster0.u96dy.mongodb.net/recipe?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});

const Schema = mongoose.Schema;

var recipeSchema = new Schema({
    title:String,
    href:String,
    ingredients:String,
    thumbnail:String
});

var RecipeModel = mongoose.model("recipe", recipeSchema);

//GET recipe data
app.get('/api/recipes', (req, res) => {

    RecipeModel.find((err, data) => {
        res.json(data);
    })
})

app.get('/api/recipes/:id', (req, res) => {
    console.log(req.params.id);

    RecipeModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

//UPDATE Recipe details
app.put('/api/recipes/:id', (req, res) => {
    console.log("Update recipe: " + req.params.id);
    console.log(req.body);

    RecipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })

})

//delete recipe
app.delete('/api/recipes/:id', (req, res) => {
    console.log("Delete recipes: " + req.params.id);

    RecipeModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

//POST when create new data
app.post('/api/recipes', (req, res) => {
    console.log('Recipe Recieved!');
    console.log(req.body.title);
    console.log(req.body.href);
    console.log(req.body.ingredients);
    console.log(req.body.thumbnail);

    RecipeModel.create({
        title: req.body.title,
        href: req.body.href,
        ingredients: req.body.ingredients,
        thumbnail:req.body.thumbnail
    })

    res.send('Recipe Added');
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
})

//connect to port 4000
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})



//mongodb+srv://admin:<password>@cluster0.u96dy.mongodb.net/<dbname>?retryWrites=true&w=majority