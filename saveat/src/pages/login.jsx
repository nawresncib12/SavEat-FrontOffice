import Background from "../components/auth/Background/Background";
import { loggedIn } from "../api/api.user";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoaderPage } from "./loader";
const Login = () => {
  const { state } = useLocation();

  let toggle;
  if (state) {
    toggle = state.toggle;
  } else {
    toggle = false;
  }

  const [loading, setLoading] = useState(!toggle);

  const navigate = useNavigate();
  useEffect(() => {
    async function log() {
      if (await loggedIn()) {
        setLoading(false);
        navigate("/home");
      } else {
        setLoading(false);
      }
    }
    log();
  }, [navigate]);

  return (
    <>
      {loading ? (
        <LoaderPage />
      ) : (
        <Background resetPass={false} toggle={toggle} auth={false}></Background>
      )}
     
    </>
  );
};

export default Login;
