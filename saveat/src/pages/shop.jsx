import { loggedIn } from "../api/api.user";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoaderPage } from "./loader";
import { BoxContainer } from "../components/shop/BoxContainer";
const Shop = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    async function log() {
      if (!(await loggedIn())) {
        setLoading(false)
        navigate("/login");
      }else{
        setLoading(false)
      }
    }
    log();
  }, [navigate]);
  
  return (
    <>
      {loading ? (
        <LoaderPage />
      ) : (
        <>
          <div>
              <BoxContainer />
          </div>
          
        </>
      )}
    </>
  );
};

export default Shop;
