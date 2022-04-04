import Background from "../components/auth/Background/Background";
import { loggedIn } from "../api/api.user";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn()) {
      navigate("/home");
    }
  }, [navigate]);
  const {state} = useLocation();
  
  let toggle ;
  if(state){
    toggle =state.toggle 
  }else{
    toggle = false;
  }
  return <Background toggle={toggle}  auth={false}></Background>;
};

export default Login;
