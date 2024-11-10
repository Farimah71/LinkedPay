import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
  const [shouldRender, setShouldRender] = useState(false);

  // -------- variables --------
  const token = localStorage.trpos__access_token;
  const expireTime = localStorage.trpos__token_expire;
  const tokenExpireTime = new Date(expireTime!);

  useEffect(() => {
    const checkExpireTimeInterval = setInterval(() => {
      if (tokenExpireTime < new Date()) {
        localStorage.removeItem("trpos__access_token");
        localStorage.removeItem("trpos__user_info");
        localStorage.removeItem("trpos__user_type");
        localStorage.removeItem("trpos__token_expire");
        setShouldRender(true);
      }
    }, 30 * 1000);
    return () => clearInterval(checkExpireTimeInterval);
  }, []);

  useEffect(() => {
    shouldRender && <Navigate to={"/login"} />;
  }, [shouldRender]);

  return token ? <Outlet /> : <Navigate to={"/login"} />;
};

export default Private;
