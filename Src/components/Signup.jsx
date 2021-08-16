import React from 'react';

const Signup = props => {
  // create a fetch reques to /signup
  const fetchSignup = () => {
    const name = document.getElementById('name');
    // const lastName = document.getElementByName('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password')
    fetch('/signup', {
      method: 'POST',
      body: JSON.stringify({
        // lastName: lastName.value, 
        email: email.value, 
        name: name.value, 
        password: password.value
      }),
      headers: {'Content-Type': 'application/json'},
    })
      .then(res => res.json())
      .then(user => {
        console.log('this is the response from the POST to /signup: ', user)
        // console.log('this is the req body from the fetch request: ', req.body)
      })
  }
  return (
    <div className="signup">
      <input id="name" name="firstName" type="text" placeholder="First Name"/>
      {/* <input id="lastName" name="lastName" type="text" placeholder="Last Name"/> */}
      <input id="email" name="email" type="text" placeholder="email"/>
      <input id="password" name="password" type="text" placeholder="password"/>
      <button onClick={()=>fetchSignup()}>Signup</button>
    </div>
  )
}

export default Signup;