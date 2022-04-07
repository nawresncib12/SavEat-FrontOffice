import Background from "../components/auth/Background/Background";
import { loggedIn } from "../api/api.user";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoaderPage } from "./loader";

const SignUp = () => {
  const [loading, setLoading] = useState(true);
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
  const { state } = useLocation();

  let toggle;
  if (state) {
    toggle = state.toggle;
  } else {
    toggle = false;
  }
  console.log(toggle);
  return (
    <>
      {loading ? (
        <LoaderPage />
      ) : (
        <Background toggle={toggle} auth={true}></Background>
      )}
    </>
  );
};
export default SignUp;
