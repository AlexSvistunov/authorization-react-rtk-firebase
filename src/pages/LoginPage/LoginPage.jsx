import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <>
      <h1>Login page</h1>
      <p>Don't have an account?</p>
      <Link to={'/register'}>Sign in</Link>
    </>
  )
}

export default LoginPage