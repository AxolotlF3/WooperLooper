import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateIngredient } from '../actions/actions';
import { updateRecipes } from '../actions/actions';

// const mapStateToProps = state => ({
//   // add pertinent state here
//   // marketTotal: state.markets.totalMarkets,
//   // cardTotal: state.markets.totalCards,

// });

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  searchBarHandler: input => dispatch(updateIngredient(input)),
  clickHandler: () => dispatch(updateRecipes()),
  // addMarket: () => {
  //   dispatch(actions.addMarketActionCreator());
  //   // document.getElementById("location").value = '';
  //   },
  // addCard: () => dispatch(actions.addCardActionCreator),
  // setLocation: (input) => dispatch(actions.setNewLocationActionCreator(input)),
  // deleteCard: () => dispatch(actions.deleteCardActionCreator)
});

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <input type="text" onChange={e => this.props.searchBarHandler(e.target.value)}/>
        <button type="button" onClick={() => this.props.clickHandler()}>Search Recipe!</button>
      </div>
    );
  }

}

export default connect(null, mapDispatchToProps)(Search);