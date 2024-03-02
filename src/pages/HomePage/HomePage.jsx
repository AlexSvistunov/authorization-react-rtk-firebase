import { Navigate } from "react-router-dom";

const HomePage = () => {
  
  return (
    <>
      <Navigate to={'/login'}/>
      <h1>HOME PAGE</h1>
    </>
  );
};

export default HomePage;
