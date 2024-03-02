
import { Link } from "react-router-dom"
const RegisterPage = () => {
  return (
   <>
    <h1>Register Page</h1>
    <p>Are you a registered person?</p>
    <Link to={'/login'}>Log in</Link>
   </>
  )
}

export default RegisterPage