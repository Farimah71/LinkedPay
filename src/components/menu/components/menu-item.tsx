import { Link, useLocation } from "react-router-dom";
import { MenuItemProps } from "./menu-item.type";
import { IconArrowRight } from "../../icons/icons";
import { useState } from "react";
import { Popover } from "antd";

export const MenuItem: React.FC<MenuItemProps> = ({
  title,
  href,
  iconActive,
  iconDeactive,
  isActive = false,
  isParent = false,
  isToggled,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { pathname } = useLocation();

  const token1 = localStorage.getItem("trpos__token");
  const token2 = localStorage.getItem("trpos__access_token");

  const pathFinder = () => {
    const result = children?.filter((ch) => ch.href === pathname);
    return result && result[0]?.href;
  };

  return (
    <Popover content={isToggled ? "" : title} placement="right">
      <li
        onClick={() => {
          if (children) {
            setIsOpen(!isOpen);
          }
        }}
        className={`flex items-center gap-2 py-2 my-3 cursor-pointer select-none ${
          isActive ? "text-base-content" : "text-base-content-40"
        }`}
      >
        {isActive && (
          <div className="h-9 w-[6px] absolute left-0 rounded-r-3xl bg-base-content"></div>
        )}

        <Link
          to={href!}
          state={{ token: token1 || token2 || "isValid" }}
          className={`flex gap-x-2 ${children && "pointer-events-none"} ${
            children && pathFinder() && "text-base-content"
          }`}
        >
          {isActive && iconActive ? iconActive : iconDeactive}
          {isToggled && title}
        </Link>

        {isToggled && isParent && (
          <IconArrowRight
            width={20}
            height={20}
            viewBox="0 0 20 20"
            className={`ml-auto -rotate-90 duration-200 ${
              isOpen && "rotate-90"
            } ${pathFinder() && "text-base-content"}`}
          />
        )}
      </li>

      <div
        className={`flex flex-col gap-6 duration-300 h-0 overflow-hidden ${
          isOpen ? "border-b pb-4 pl-1 h-36" : ""
        }`}
      >
        {children &&
          isOpen &&
          children?.map((item, index) => {
            return (
              <Link
                to={item.href!}
                state={{ token: token1 || token2 || "isValid" }}
                key={item.title + index}
                className={`${
                  pathname === item.href
                    ? "text-base-content flex gap-4 items-center"
                    : "text-base-content-40 pl-7"
                }`}
              >
                {pathname === item.href && (
                  <div className="w-[14px] h-1 bg-base-content rounded-2.5xl"></div>
                )}
                {item.title}
              </Link>
            );
          })}
      </div>
    </Popover>
  );
};
