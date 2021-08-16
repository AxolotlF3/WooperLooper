class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sInEmail: '',
      sInPassword: ''
    }
  }

onEmailChange = (e) => {
  this.setState({sInEmail: event.target.value})
}

onPasswordChange = (e) => {
  this.setState({sInPassword: event.target.value})
}

onSignIn = (e) => {
  fetch('http://localhost:3000/signin', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: this.state.signInEmail,
      password: this.state.signInPassword
    })
  })
  .then(response => response.json())
  .then(user => {
    if (user.id) {
      this.props.loadUser(user)
      this.props.onRouteChange('Search');
    }
  })
}



}

