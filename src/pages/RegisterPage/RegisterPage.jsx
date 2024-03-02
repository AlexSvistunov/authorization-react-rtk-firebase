import { Link } from "react-router-dom";
import SignUp from "../../components/SignUp/SignUp";
const RegisterPage = () => {
  return (
    <>
      <h1>Register Page</h1>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
        <p>Are you a registered person?</p>
        <Link to={"/login"}>Log in</Link>
      </div>
      <SignUp />
    </>
  );
};

export default RegisterPage;
