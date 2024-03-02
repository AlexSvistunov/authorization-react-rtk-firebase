import Form from "../Form/Form"
import { useDispatch } from "react-redux"
import { setUser } from "../../store/slices/userSlice"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        dispatch(setUser({email: email}))
        navigate('/')

      })

      .catch((error) => {
        console.log(error.message);
      })
  }

  return (
    <Form title='Login' handleClick={handleLogin}/>
  )
}

export default Login