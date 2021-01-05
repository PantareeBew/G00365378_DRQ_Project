import React from 'react';
import '../App.css';
import { Recipe } from './Recipe';
import axios from 'axios';

export class Recipe2 extends React.Component {
    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        recipe:[   ]
    };

    componentDidMount() {
        axios.get(' http://localhost:4000/api/recipes')
            .then(
                (response) => {
                    this.setState({ recipe: response.data })
                }
            )
            .catch(
                (error) => { console.log(error) }
            );
    } 

    //get the database
    ReloadData(){
        axios.get('http://localhost:4000/api/recipes')
        .then(
            (response) => {
                this.setState({ recipe: response.data })
            }
        )
        .catch(
            (error) => { console.log(error) 
            });
    }

    render() {
        return (
            //call recipe
            <div>
                <h1>YOUR RECIPES</h1>
                <Recipe recipe={this.state.recipe} ReloadData={this.ReloadData}></Recipe>

            </div>
        );
    }
} 

//hard code for api some images are not working
/*
                {
                    "title": "Ginger Champagne",
                    "href": "http:\/\/allrecipes.com\/Recipe\/Ginger-Champagne\/Detail.aspx",
                    "ingredients": "champagne, ginger, ice, vodka",
                    "thumbnail": "https://www.theseasonedmom.com/wp-content/uploads/2015/12/Ginger-Champagne-Cocktail-11A.jpg"
                },
                {
                    "title": "Potato and Cheese Frittata",
                    "href": "http:\/\/allrecipes.com\/Recipe\/Potato-and-Cheese-Frittata\/Detail.aspx",
                    "ingredients": "cheddar cheese, eggs, olive oil, onions, potato, salt",
                    "thumbnail": "http:\/\/img.recipepuppy.com\/2.jpg"
                },
                {
                    "title": "Eggnog Thumbprints",
                    "href": "http:\/\/allrecipes.com\/Recipe\/Eggnog-Thumbprints\/Detail.aspx",
                    "ingredients": "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
                    "thumbnail": "http:\/\/img.recipepuppy.com\/3.jpg"
                },
                {
                    "title": "Succulent Pork Roast",
                    "href": "http:\/\/allrecipes.com\/Recipe\/Succulent-Pork-Roast\/Detail.aspx",
                    "ingredients": "brown sugar, garlic, pork chops, water",
                    "thumbnail": "http:\/\/img.recipepuppy.com\/4.jpg"
                },
                {
                    "title": "Irish Champ",
                    "href": "http:\/\/allrecipes.com\/Recipe\/Irish-Champ\/Detail.aspx",
                    "ingredients": "black pepper, butter, green onion, milk, potato, salt",
                    "thumbnail": "http:\/\/img.recipepuppy.com\/5.jpg"
                },
                {
                    "title": "Chocolate-Cherry Thumbprints",
                    "href": "http:\/\/allrecipes.com\/Recipe\/Chocolate-Cherry-Thumbprints\/Detail.aspx",
                    "ingredients": "cocoa powder, baking powder, butter, eggs, flour, oats, salt, sugar, vanilla extract",
                    "thumbnail": "http:\/\/img.recipepuppy.com\/6.jpg"
                },
                {
                    "title": "Mean Woman Pasta",
                    "href": "http:\/\/allrecipes.com\/Recipe\/Mean-Woman-Pasta\/Detail.aspx",
                    "ingredients": "garlic, kalamata olive, olive oil, pepperoncini, seashell pasta, tomato",
                    "thumbnail": "http:\/\/img.recipepuppy.com\/7.jpg"
                },
                {
                    "title": "Hot Spiced Cider",
                    "href": "http:\/\/allrecipes.com\/Recipe\/Hot-Spiced-Cider\/Detail.aspx",
                    "ingredients": "allspice, apple cider, brown sugar, cinnamon, cloves, nutmeg, orange, salt",
                    "thumbnail": "http:\/\/img.recipepuppy.com\/8.jpg"
                },
                {
                    "title": "Amy's Barbecue Chicken Salad",
                    "href": "http:\/\/allrecipes.com\/Recipe\/Amys-Barbecue-Chicken-Salad\/Detail.aspx",
                    "ingredients": "barbecue sauce, chicken, cilantro, lettuce, ranch dressing, lettuce, tomato",
                    "thumbnail": "http:\/\/img.recipepuppy.com\/10.jpg"
                } */



                

