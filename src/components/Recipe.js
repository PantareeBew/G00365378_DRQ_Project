import React from 'react';
import { RecipeItem } from './RecipeItem';

export class Recipe extends React.Component {
    render() {
        return (this.props.recipe.map((recipe) => {
            //call recipeItem 
            return <RecipeItem recipe = {recipe} ReloadData={this.props.ReloadData}></RecipeItem>
        }));
    }
}