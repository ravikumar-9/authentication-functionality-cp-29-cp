// Write your JS code here
import {Component} from 'react'

import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {username: 'rahul', password: 'rahul@2021'}

  onLogin = async () => {
    const {username, password} = this.state

    const url = 'https://apis.ccbp.in/login'

    const userData = {username, password}

    const options = {method: 'POST', body: JSON.stringify(userData)}

    const response = await fetch(url, options)

    const data = await response.json()

    console.log(data.jwt_token)

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-bg-container">
        <h1 className="login-text">Please Login</h1>
        <button type="button" onClick={this.onLogin}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
