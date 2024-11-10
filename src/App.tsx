import { Router } from "./routes";
import { useEffect } from "react";
import { useGetClientIp } from "./hooks/get-client-ip";
import { useAppDispatch } from "./hooks/redux-hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { setIP } from "./redux/reducers/_ip";
import { httpService } from "./core/http-service";
import "./assets/fonts/yekan/Yekan-Font.css"

export default function App() {
  const dispatch = useAppDispatch();

  localStorage.trpos__lng = "TR";
  const accessToken = localStorage.trpos__access_token;

  useEffect(() => {
    fetchIp();
  }, []);
  useEffect(() => {
    if (accessToken) {
      httpService.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      httpService.defaults.headers.common.Authorization = null;
    }
  }, [accessToken]);

  const navigate = useNavigate();
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (!state?.token) {
      localStorage.removeItem("trpos__token");
      localStorage.removeItem("trpos__access_token");
      navigate("/login");
    }
  }, [pathname]);

  const fetchIp = async () => {
    const clientIp = await useGetClientIp();
    dispatch(setIP(clientIp));
  };

  return (
    <>
      <Router />
    </>
  );
}
