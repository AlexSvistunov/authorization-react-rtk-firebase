import Form from "../Form/Form"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";


const SignUp = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
const handleRegister = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
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
    <Form title='Register' handleClick={handleRegister}/>
  )
}

export default SignUp