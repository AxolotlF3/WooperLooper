import React from 'react';
import { connect } from 'react-redux'
import Signup from './Signup.jsx';
import { updateAccountStatus } from '../actions/actions.js';

const mapStateToProps = state => ({
  userSignedIn: state.recipes.userSignedIn,
  userHasAccount: state.recipes.userHasAccount
})

const mapDispatchToProps = dispatch => ({
  clickHandler: (accountStatus) => dispatch(updateAccountStatus(accountStatus))
})

const Login = props => {

  return (
    <div className="login">
      {/* have the action in the form take you to the Search page */}
      <form action='POST' action='/'>
        <input name="email" type="text" placeholder="email"/>
        <input name="password" type="text" placeholder="password"/>
        <button>Login</button>
      </form>
      <span>Don't have an account? Click <p onClick={()=> props.clickHandler(false)}>here</p> to sign up.</span>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);