import React, { Component } from 'react';
import HomepageContainer from './components/HomepageContainer.jsx';
import Search from './components/Search.jsx'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  userSignedIn: state.recipes.userSignedIn,
})

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {this.props.userSignedIn ? <Search /> : <HomepageContainer />}        
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
