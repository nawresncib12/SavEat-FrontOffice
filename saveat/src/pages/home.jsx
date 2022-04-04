import { loggedIn } from "../api/api.user";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logout } from "../api/api.user";
import { Button } from "../UI/Button";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn()) {
      navigate("/login");
    }
  }, [navigate]);
  const signout = async () => {
    const res = await logout();
    if (res) {
      navigate("/login");
    }
  };
  return (
    <>
      <div>HII you are Home</div>
      <Button color="#4DAAAA" onClick={signout}>
        Log out
      </Button>
    </>
  );
};

export default Home;
