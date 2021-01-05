import React from 'react';
import axios from 'axios';

export class addDetails extends React.Component{
    constructor() {
        super();
        //defined method
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeHref = this.onChangeHref.bind(this);
        this.onChangeIngredients = this.onChangeIngredients.bind(this);
        this.onChangeThumbnail = this.onChangeThumbnail.bind(this);

        this.state = {
            Title: '',
            Href: '',
            Ingredients: '',
            Thumbnail:''
        }
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeHref(e) {
        this.setState({
            Href: e.target.value
        });
    }

    onChangeIngredients(e) {
        this.setState({
            Ingredients: e.target.value
        });
    }

    onChangeThumbnail(e) {
        this.setState({
            Thumbnail: e.target.value
        });
    }

    //after add submit button should have an alert pop up
    onSubmit(e) {
        e.preventDefault();
        alert("Recipe: " + this.state.Title + " " + 
        this.state.Href + " " +
        this.state.Ingredients+ " " + 
        this.state.Thumbnail);
        
        const newRecipe = {
            title: this.state.Title,
            href: this.state.Href,
            ingredients: this.state.Ingredients,
            thumbnail:this.state.Thumbnail
        }
        
        axios.post('http://localhost:4000/api/recipes',newRecipe)
        .then((res)=>{
            console.log(res);

        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render(){
        return(
            //div elements
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Recipe Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Recipe Link:</label>
                        <textarea type = "text"
                        className='form-control'
                        value={this.state.Href}
                        onChange={this.onChangeHref}>
                        </textarea>
                    </div>

                    <div className = 'form-group'>
                        <label>Ingredients:</label>
                        <textarea type='text'
                        className = 'form-control'
                        value = {this.state.Ingredients}
                        onChange={this.onChangeIngredients}>                            
                        </textarea>

                    </div>

                    <div className = 'form-group'>
                        <label>Thumbnail:</label>
                        <textarea type='text'
                        className = 'form-control'
                        value = {this.state.Thumbnail}
                        onChange={this.onChangeThumbnail}>                            
                        </textarea>

                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Add Recipe'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}