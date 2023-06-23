// Write your JS code here
import './index.css'

import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const {history} = props
  const onLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <button type="button" className="logout-button" onClick={onLogout}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
