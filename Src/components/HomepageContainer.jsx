import React, { Component } from "react";
import { connect } from 'react-redux'

import * as actions from '../actions/actions';

import Signup from "./Signup.jsx";
import Login from "./LogIn.jsx";

const mapStateToProps = state => ({
  userHasAccount: state.recipes.userHasAccount,
})

const HomepageContainer = props => {
  console.log('this is props on the HomepageContainer ', props)
    return(
      <div className='homepageBox'>
        {props.userHasAccount ? <Login /> : <Signup />}
      </div>
    )
  
}

export default connect(mapStateToProps, null)(HomepageContainer)