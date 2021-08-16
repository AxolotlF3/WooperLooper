import React from 'react';
import { connect } from 'react-redux'
import Signup from './Signup.jsx';
import { updateAccountStatus } from '../actions/actions.js';
import { updateLoginStatus } from '../actions/actions.js';

const mapStateToProps = state => ({
  userSignedIn: state.recipes.userSignedIn,
  userHasAccount: state.recipes.userHasAccount
})

const mapDispatchToProps = dispatch => ({
  clickHandler: (accountStatus) => dispatch(updateAccountStatus(accountStatus)),
  loginHandler: (value) => dispatch(updateLoginStatus(value))
})

const Login = props => {
 // make a fetch request to /login
 const fetchLogin = () => {
    // const email = document.getElementById('email')
    // const password = document.getElementById('password')
    // // console.log('this is the FIRST button works message!')
    // // console.log('This is password: ', password.value)
    // fetch('/login', {
    //   method: 'POST',
    //   body: JSON.stringify({email: email.value, password: password.value}),
    //   headers: { 'Content-Type': 'application/json'}
    // })
    //   .then(res => res.json())
    //   .then(user => {
    //     // console.log('this is the USER! ', user)
    //     if(user.id){
    //       props.loginHandler(true);
    //     }
    //   })
    return props.loginHandler(true);
};
 
  return (
    <div className="login">
      {/* have the action in the form take you to the Search page */}
      {/* <form action='POST' > */}
        <input id="email" name="email" type="text" placeholder="email"/>
        <input id="password" name="password" type="text" placeholder="password"/>
        <button onClick={()=>fetchLogin()}>Login</button>
      {/* </form> */}
      <span>Don't have an account? Click <p onClick={()=> props.clickHandler(false)}>here</p> to sign up.</span>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);

