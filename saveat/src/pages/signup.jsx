import Background from "../components/auth/Background/Background";
import { loggedIn } from "../api/api.user";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const SignUp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn()) {
      navigate("/home");
    }
  }, [navigate]);
  return <Background auth={true}></Background>;
};

export default SignUp;
