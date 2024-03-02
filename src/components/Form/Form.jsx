import React from 'react'
import { useState } from 'react'

const Form = ({title, handleClick}) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const onChangeEmailHandler = (emailValue) => {
    setEmail(emailValue)
  }

  const onChangePasswordHandler = (passwordValue) => {
    setPass(passwordValue)
  }

  return (
    <>
      <input type='email' value={email} onChange={(e) => onChangeEmailHandler(e.target.value)} placeholder='Email'></input>
      <input type='password' value={pass} onChange={(e) => onChangePasswordHandler(e.target.value)} placeholder='Password'></input>
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </>
  )
}

export default Form