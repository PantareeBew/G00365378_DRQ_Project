import logo from './logo.svg';
import './App.css';
import React ,{ Component } from 'react';
import { render } from '@testing-library/react';
import { Home } from './components/Home';
import { addDetails } from './components/addDetails';
import { Details } from './components/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Recipe } from './components/Recipe';
import { Recipe2 } from './components/Recipe2';
import { editRecipe } from './components/editRecipe';
//import {readData} from './components/Recipe2';

//Navigation Bars and Routing
class App extends Component {
  render() {
    return (
      <Router>
        
      <div className="App">
      
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">FOOD</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/Details">MY RECIPES</Nav.Link>
            <Nav.Link href="/addDetails">ADD</Nav.Link>
            <Nav.Link href="/Recipe2">RECIPE</Nav.Link>
          </Nav>
        </Navbar>

        <br></br>
        <Switch>
          <Route path='/' component= {Home} exact/>
          <Route path='/Details' component= {Details} exact/>
          <Route path='/addDetails' component= {addDetails} exact/>
          <Route path='/Recipe2' component= {Recipe2} exact/>
          <Route path='/editRecipe/:id' component= {editRecipe} exact/>
        </Switch>
   
      </div>
      </Router>
    );
  }
}

export default App;
