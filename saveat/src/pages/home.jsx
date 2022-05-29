import { loggedIn } from "../api/api.user";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logout } from "../api/api.user";
import { Button } from "../UI/Button";
import { LoaderPage } from "./loader";
import NavbarHead from "../components/home/NavbarHead";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    async function log() {
      if (!(await loggedIn())) {
        setLoading(false);
        navigate("/login");
      } else {
        setLoading(false);
      }
    }
    log();
  }, [navigate]);
  const signout = async () => {
    const res = await logout();
    if (res) {
      navigate("/login");
    }
  };
  return (
    <>
      {loading ? (
        <LoaderPage />
      ) : (
        <>
          <NavbarHead></NavbarHead>
          <p>hi hi</p>
          <p>hi hi</p>
          <p>hi hi</p>
          <p>hi hi</p>
          <p>hi hi</p>
          <p>hi hi</p>
          <Button color="#4DAAAA" onClick={signout}>
            Log out
          </Button>
        </>
      )}
    </>
  );
};

export default Home;
