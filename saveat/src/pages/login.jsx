import Background from "../components/auth/Background/Background";
import { loggedIn } from "../api/api.user";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect , useState} from "react";

import { LoaderPage } from "./loader";
const Login = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
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
  return (
    <>
      {loading ? (
        <LoaderPage />
      ) : (
        <Background toggle={toggle} auth={false}></Background>
      )}
    </>
  );
};

export default Login;
