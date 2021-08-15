import React, { Component } from 'react';
import Search from './components/Search.jsx';
// import Recipes from './Recipes.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Search />
      </div>
    );
  }
}

export default App;
