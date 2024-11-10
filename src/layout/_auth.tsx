import { Link, Outlet, useLocation } from "react-router-dom";
import login from "../assets/images/images/login.svg";
import forgetPassword from "../assets/images/images/Forgot password-cuate.svg";
import signUp from "../assets/images/images/Sign up-amico.svg";
import changePhone from "../assets/images/images/Fingerprint-cuate.svg";
import logo from "../assets/images/images/logo.png"

const AuthLayout = () => {
  const { pathname } = useLocation();

  const imageSelector = (path: string) => {
    const image: { [key: string]: string } = {
      "/": login,
      "/login": login,
      "/signup": signUp,
      "/forgot-password": forgetPassword,
      "/change-phone": changePhone,
    };
    return image[path];
  };

  return (
    <section className="w-full min-h-screen md:grid md:grid-cols-2 select-none">
            <div className="w-full min-h-screen relative flex justify-center items-center bg-base-gray p-4 sm:p-10">
              <div className="w-full max-w-[500px]">
                <Outlet />
              </div>
                <div className="w-full absolute bottom-0 flex justify-center py-10">
                    {
                        pathname==="/login" && (
                            <div className="text-sm text-base-content mt-4">
                                حساب کاربری ندارید ؟ 
                                <Link to="/signup" className="text-primary mx-1" state={{token:"token"}}>
                                    ساخت حساب کاربری
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="w-full h-full hidden md:grid grid-rows-[auto_1fr_auto] p-10 2xl:px-20 2xl:py-10">
                <div className="w-full flex justify-center items-center">
                    <img className="w-24" src={logo} alt="" />
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <img className="w-full max-w-[500px]" src={imageSelector(pathname)} alt="" />
                </div>
                <div className="bg-gray-100 bg-opacity-50 backdrop-blur-sm p-6 rounded-2.5xl -translate-y-[75%]">
                    <ul className="list-disc text-sm text-base-content-medium">
                        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </li>
                        <li className="mt-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز </li>
                    </ul>
                </div>
            </div>
        </section>
  );
};

export default AuthLayout;
