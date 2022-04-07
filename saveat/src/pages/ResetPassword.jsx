import React from "react";
import { useParams } from "react-router-dom";
import Background from "../components/auth/Background/Background";
const ResetPassword = () => {
  const token = useParams();

  return (
    <Background
      resetPass={true}
      token={token}
      toggle={true}
      auth={false}
    ></Background>
  );
};

export default ResetPassword;
