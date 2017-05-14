import React, {Component} from 'react';
import auth from '../../auth'
import './SignUp.css';

const ENTER = 13;

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleSignUp = () => {
    // deep destructuring equivalent to (let email = this.refs.email.value;)
    let { email: {value: email}, password: {value: password} } = this.refs;
    if (email && password) {
      auth.signUp(email, password)
      .then(res => {
        this.props.router.push('/login')
      })
      /*.catch(alert("Please enter a valid email and password"), console.error)*/; // ALWAYS RUNS BEFORE .then
    }
    else {
      this.setState({ error: "Please enter an email and password"});
    }
  }

  _handleTyping = (e) => {
    if (this.state && this.state.error) {
      this.setState({ error: null });
    }
    if (e.keyCode===ENTER) {
      this._handleSignUp();
    }
  }

  render() {
    return (
      <div className="formBackground">
        <div className="authForm">

          <h1 className="title">Please Sign Up</h1>

          <input type="text" ref="email" placeholder="email"
            onKeyUp={this._handleTyping}
          />
          <input type="password" ref="password" placeholder="password"
            onKeyUp={this._handleTyping}
          />
          <div className="button">
            <button onClick={this._handleSignUp}>sign up</button>
          </div>
          <a href="/login"><p>Already signed up? Login</p></a>

        </div>
      </div>
    );
  }

}
