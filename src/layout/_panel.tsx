import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/layout/sidebar";
import { Header } from "../components/layout/header";
import { Loading } from "../components/loading";
import { useAppSelector } from "../hooks/redux-hooks";

const PanelLayout = () => {
  const [isToggled, setIsToggled] = useState(true);

  const { loading } = useAppSelector((state) => state.signoutSlice);

  return (
    <>
      {loading && (
        <div className="flex items-center justify-center fixed w-full h-full backdrop-blur-[3px]">
          <Loading />
        </div>
      )}
      <div
        className={`layout w-full min-h-screen grid bg-base-gray transition-all duration-300 select-none ${
          isToggled ? "grid-cols-[280px_1fr]" : "grid-cols-[80px_1fr]"
        }`}
      >
        <Sidebar
          isToggled={isToggled}
          setIsToggled={() => setIsToggled((prev) => !prev)}
        />

        <div className="w-full h-full grid grid-rows-[100px_auto_1fr]">
          <Header isToggled={isToggled} />
          <main
            className={`duration-500 ease-linear ${
              isToggled ? "ps-8" : "ps-16"
            }`}
          >
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default PanelLayout;
