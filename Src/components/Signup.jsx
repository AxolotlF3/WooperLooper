import React from 'react';

const Signup = props => {
  return (
    <div className="signup">
      <form action='POST' action='/signup'>
        <input name="firstName" type="text" placeholder="First Name"/>
        <input name="lastName" type="text" placeholder="Last Name"/>
        <input name="email" type="text" placeholder="email"/>
        <input name="password" type="text" placeholder="password"/>
        <button>Signup</button>
      </form>
    </div>
  )
}

export default Signup;