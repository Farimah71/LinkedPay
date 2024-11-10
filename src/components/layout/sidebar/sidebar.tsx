import logo from "../../../assets/images/logo.svg";
import logoIcon from "../../../assets/images/logo-icon.png";
import {
  IconArrowLeft,
  IconBag,
  IconPieChart,
} from "../../../components/icons/icons";
import { useEffect, useState } from "react";
import { RiUserLine } from "react-icons/ri";
import { Menu } from "../../menu";
import { MenuItem } from "../../menu/components/menu-item";
import { MenuProps } from "antd";
import { useLocation } from "react-router-dom";
import { SidebarProps } from "./sidebar.types";

type MenuItem = Required<MenuProps>["items"][number];

export const Sidebar: React.FC<SidebarProps> = ({
  isToggled,
  setIsToggled,
}) => {
  const [menuNumber, setMenuNumber] = useState<0 | 1 | 2>(0);

  const pathName=useLocation().pathname;

  useEffect(() => {
    if(pathName.includes("application")) {
      setMenuNumber(0)
    } else if(pathName.includes("personal")) {
      setMenuNumber(1)
    } else if(pathName.includes("Institutional")) {
      setMenuNumber(2)
    }
  } , [pathName]);

  const { pathname } = useLocation();

  return (
    <aside className="w-full h-full grid grid-rows-[auto_auto_1fr] p-6 overflow-hidden bg-base-gray border-r-2 border-actual-white">
      <div className="flex justify-between items-center">
        {isToggled ? (
          <img
            className="w-[140px] h-[28px] select-none transition-all duration-300"
            src={logo}
            alt="logo"
          />
        ) : (
          <img src={logoIcon} alt="logo" width={30} />
        )}

        <div
          className={`flex justify-center bg-actual-white items-center p-1 duration-300 rounded-full cursor-pointer ${
            isToggled ? "" : "ml-16 absolute"
          }`}
          onClick={setIsToggled}
        >
          <IconArrowLeft
            width={16}
            height={16}
            viewBox="0 0 20 20"
            className={`${!isToggled && "rotate-180"}`}
          />
        </div>
      </div>
      {isToggled && menuNumber != 0 && (
        <div className="mt-10">
          <div className="w-full relative h-[55px] grid grid-cols-2 rounded-2.5xl bg-actual-white p-1">
            <div
              onClick={() => setMenuNumber(1)}
              className={`flex items-center gap-1 text-base-content-40 p-2 rounded-2.5xl cursor-pointer ${
                menuNumber === 1 &&
                "bg-base-content-3 transition-colors duration-300 !text-base-content"
              }`}
            >
              <RiUserLine />
              <p className="text-xs font-semibold">Bireysel</p>
            </div>
            <div
              onClick={() => setMenuNumber(2)}
              className={`flex items-center gap-1 text-base-content-40 p-2 rounded-2.5xl cursor-pointer ${
                menuNumber === 2 &&
                "bg-base-content-3 transition-colors duration-300 !text-base-content"
              }`}
            >
              <IconBag width={20} height={20} viewBox="0 0 24 24" />
              <p className="text-xs font-semibold">Kurumsal</p>
            </div>
          </div>
        </div>
      )}

      <nav className="w-full mt-10 no_scroll overflow-y-auto scroll-m-0">
        {menuNumber == 0 ? (
          <div className="ml-1">
            <MenuItem
              title="Başvuru"
              href="/dashboard/application"
              iconActive={
                <IconPieChart
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="text-black"
                />
              }
              iconDeactive={
                <IconPieChart width={24} height={24} viewBox="0 0 24 24" />
              }
              isActive={pathname === "/dashboard/application"}
              isToggled={isToggled}
            />
          </div>
        ) : (
          <div className="mb-10 ml-1">
            <MenuItem
              title="Panel"
              href={
                menuNumber === 2
                  ? "/dashboard/Institutional/panel"
                  : "/dashboard/personal/panel"
              }
              iconActive={
                <IconPieChart
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="text-black"
                />
              }
              iconDeactive={
                <IconPieChart width={24} height={24} viewBox="0 0 24 24" />
              }
              isActive={
                menuNumber === 2
                  ? pathname === "/dashboard/Institutional/panel"
                  : pathname === "/dashboard/personal/panel"
              }
              isToggled={isToggled}
            />
          </div>
        )}
        <Menu isToggled={isToggled} menuNumber={menuNumber} />
      </nav>
    </aside>
  );
};
