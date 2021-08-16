import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomepageContainer from './components/HomepageContainer.jsx';
import Search from './components/Search.jsx';
import Recipes from './components/Recipes.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';

const mapStateToProps = state => ({
  userSignedIn: state.recipes.userSignedIn,
  ingredient: state.recipes.ingredient,
  recipes: state.recipes.recipes,
  selectedRecipe: state.recipes.selectedRecipe,
});


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1> Wooper Looper</h1>
        {/* <Search /> */}
        {/* {
          (this.props.userSignedIn && this.props.selectedRecipe.idMeal) ? 
          <RecipeDetails /> :
          <Recipes recipes={this.props.recipes}/>
        } */}
      
        {/* {
          this.props.recipes.length ? 
          <Recipes recipes={this.props.recipes}/> : null
        }
        {
          this.props.selectedRecipe.idMeal &&
          <RecipeDetails />
        } */}
        {this.props.userSignedIn ? <Search /> : <HomepageContainer />}        
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);

