import React from 'react';
import {Recipe} from './Recipe';

export class Details extends React.Component {
    //display my favourite recipes
    state = {
        recipe:[  
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
            }
         ]
    };
    render() {
        return (
            <div>
                <h1>My Recipe</h1>
               <Recipe recipe = {this.state.recipe}></Recipe>
            </div>
        );
    }
} 
