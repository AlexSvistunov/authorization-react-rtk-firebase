import { Link } from "react-router-dom";
import Login from "../../components/Login/Login";

const LoginPage = () => {
  return (
    <>
      <h1>Login page</h1>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
        <p>Don't have an account?</p>
        <Link to={"/register"}>Sign up</Link>
      </div>

      <Login />
    </>
  );
};

export default LoginPage;
