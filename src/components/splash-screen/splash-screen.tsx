import Logo from "../../assets/images/logo.svg";
import { Loading } from "../loading";

export const SplashScreen = () => {
  return (
    <div className="m-auto w-fit flex flex-col gap-5 items-center h-screen justify-center">
      <img src={Logo} width={150} alt="Logo" />
      <Loading />
    </div>
  );
};
