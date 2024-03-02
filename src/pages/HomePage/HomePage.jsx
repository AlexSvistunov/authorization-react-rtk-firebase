import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";

const HomePage = () => {
  const dispatch = useDispatch()
  const {email} = useSelector(state => state.user)
  console.log(email);

  const logOutHandler = () => {
    dispatch(removeUser())
  }
  
  return (
    <>
      {/* <Navigate to={'/login'}/> */}
      <h1>HOME PAGE</h1>
      <span>USER: {email}</span>
      {email && <button onClick={logOutHandler}>Logout</button>}
    </>
  );
};

export default HomePage;
