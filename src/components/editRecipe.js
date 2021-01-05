//use React library
import React from 'react';
import axios from 'axios';
export class editRecipe extends React.Component {

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

    componentDidMount(){
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/recipes/' + this.props.match.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Href:response.data.href,
                Ingredients:response.data.ingredients,
                Thumbnail:response.data.thumbnail
            })
        })
        .catch((error)=>{
            console.log(error);
        });
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

    //after click submit button alert shoud show
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
            thumbnail:this.state.Thumbnail,
            _id:this.state._id
        }

        axios.put('http://localhost:4000/api/recipes/'+this.state._id,newRecipe)
        .then(res =>{
            console.log(res.data)
        })
        .catch();
    }

    //render method
    render() {
        return (
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
                            value='Edit Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }

}