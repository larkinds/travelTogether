import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  //       onClick() {
  //       const loginSignUpForm = document.querySelector('#loginOrSignUp-form')
  //       const email = loginSignUpForm['email'].value
  //       const password = loginSignUpForm['password'].value

  //       firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  //         // Handle Errors here.
  //         var errorCode = error.code;
  //         var errorMessage = error.message;
  //         // ...
  //       });
  //   }

  return (
    <div id="modal-loginOrSignUp">
      <div className="modal-loginOrSignUp">
        <form onSubmit={handleSubmit} name={name} id="loginOrSignUp-form">
          <div className="input-field">
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" id="email" />
          </div>
          <div className="input-field" id="password">
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" />
          </div>
          <div className="input-field">
            <button type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
      <a href="/auth/google">{displayName} with Google</a>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
