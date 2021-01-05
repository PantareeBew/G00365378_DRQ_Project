import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class RecipeItem extends React.Component {
    constructor(){
        super();

        this.DeleteRecipe = this.DeleteRecipe.bind(this);
    }

    //delete method
    DeleteRecipe(e){
        e.preventDefault();
        console.log("Delete: " + this.props.recipe._id);

        axios.delete("http://localhost:4000/api/recipes/" + this.props.recipe._id)
        .then(()=>{
            //invoke fucntion
            this.props.ReloadData();
        })
        .catch();
    }

    render() {
        return (//display recipe
            <div>
                <Card>
                    <Card.Header>{this.props.recipe.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <img src={this.props.recipe.thumbnail} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <a href={this.props.recipe.href}>Recipe for this Menu</a>
                                <p>{this.props.recipe.ingredients}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/editRecipe/"+ this.props.recipe._id} className= "btn btn-primary"> Edit</Link>
                    <Button variant = "danger" onClick={this.DeleteRecipe} >Delete</Button>
                </Card>
            </div>
        );
    }
}