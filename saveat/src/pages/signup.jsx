import Background from "../components/auth/Background/Background";
import { loggedIn } from "../api/api.user";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const SignUp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn()) {
      navigate("/home");
    }
  }, [navigate]);
  const { state } = useLocation();

  let toggle;
  if (state) {
    toggle = state.toggle;
  } else {
    toggle = false;
  }
  console.log(toggle);
  return <Background toggle={toggle} auth={true}></Background>;
};

export default SignUp;
