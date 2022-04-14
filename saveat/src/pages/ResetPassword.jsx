import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import Background from "../components/auth/Background/Background";
import { loggedIn } from "../api/api.user";
import { useEffect } from "react";
const ResetPassword = () => {
  const token = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function log() {
      if (await loggedIn()) {
        navigate("/home");
      }
    }
    log();
  }, [navigate]);
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
