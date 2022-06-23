import React from 'react'
import './Login.css'

export default function Login(props) {
  const usernameRef = React.useRef<HTMLInputElement>();
  const passwordRef = React.useRef<HTMLInputElement>();

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    props.onClick();

    // if (usernameRef.current != null && passwordRef.current != null)
      // props.onClick(usernameRef.current.value, passwordRef.current.value)

  }

  return (
    <div onSubmit={handleSubmit} className="login">
      <h2>Login</h2>
      <form>
        <label>
          Username
          <input
            id="username"
            type="text"
            ref={usernameRef}
          />
        </label>
        <label>
          Password
          <input
            id="password"
            type="password" 
            ref={passwordRef}
          />
        </label>
        <input type="submit" value="submit" className="submit"></input>
      </form>
    </div>
  )
}