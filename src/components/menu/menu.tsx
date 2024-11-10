import { useLocation } from "react-router-dom";
import { menuItems1, menuItems2, menuItems3 } from "../../data/menu-items";
import { MenuItem } from "./components/menu-item";
import { MenuProps } from "./menu.types";

export const Menu: React.FC<MenuProps> = ({
  menuNumber,
  isToggled,
}: MenuProps) => {
  const { pathname } = useLocation();

  if (menuNumber === 1) {
    return (
      <>
        <div>
          {isToggled && (
            <p className="text-sm text-base-content-40">İŞLEMLER</p>
          )}
          <ul className="p-1">
            {menuItems2["İŞLEMLER"].map((item, index) => {
              return (
                <MenuItem
                  key={`islem-${index}`}
                  title={item.title}
                  href={item.href}
                  iconActive={item.iconActive}
                  iconDeactive={item.iconDeactive}
                  isActive={pathname === item.href}
                  isParent={item.isParent}
                  isToggled={isToggled}
                  children={item.children}
                />
              );
            })}
          </ul>
        </div>

        <div className="mt-6">
          {isToggled && (
            <p className="text-sm text-base-content-40">Daha Fazlası</p>
          )}
          <ul className="p-1">
            {menuItems2["Daha Fazlası"].map((item, index) => {
              return (
                <MenuItem
                  key={`daha-${index}`}
                  title={item.title}
                  href={item.href}
                  iconActive={item.iconActive}
                  iconDeactive={item.iconDeactive}
                  isActive={pathname === item.href}
                  isParent={item.isParent}
                  isToggled={isToggled}
                />
              );
            })}
          </ul>
        </div>
      </>
    );
  }

  if (menuNumber === 2) {
    return (
      <>
        <div>
          {isToggled && (
            <p className="text-sm text-base-content-40">SANAL POS</p>
          )}
          <ul className="p-1">
            {menuItems1["SANAL POS"].map((item, index) => {
              return (
                <MenuItem
                  key={`sanal-${index}`}
                  title={item.title}
                  href={item.href}
                  iconActive={item.iconActive}
                  iconDeactive={item.iconDeactive}
                  isActive={pathname === item.href}
                  isParent={item.isParent}
                  isToggled={isToggled}
                  children={item.children}
                />
              );
            })}
          </ul>
        </div>

        <div className="mt-6">
          {isToggled && (
            <p className="text-sm text-base-content-40">FİZİKİ POS</p>
          )}
          <ul className="p-1">
            {menuItems1["FİZİKİ POS"].map((item, index) => {
              return (
                <MenuItem
                  key={`pos-${index}`}
                  title={item.title}
                  href={item.href}
                  iconActive={item.iconActive}
                  iconDeactive={item.iconDeactive}
                  isActive={pathname === item.href}
                  isParent={item.isParent}
                  isToggled={isToggled}
                />
              );
            })}
          </ul>
        </div>

        <div className="mt-6">
          {isToggled && (
            <p className="text-sm text-base-content-40">Daha Fazlası</p>
          )}
          <ul className="p-1">
            {menuItems1["Daha Fazlası"].map((item, index) => {
              return (
                <MenuItem
                  key={`daha-${index}`}
                  title={item.title}
                  href={item.href}
                  iconActive={item.iconActive}
                  iconDeactive={item.iconDeactive}
                  isActive={pathname === item.href}
                  isParent={item.isParent}
                  isToggled={isToggled}
                />
              );
            })}
          </ul>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="mt-6">
        {isToggled && (
          <p className="text-sm text-base-content-40">Daha Fazlası</p>
        )}
        <ul className="p-1">
          {menuItems3["Daha Fazlası"].map((item, index) => {
            return (
              <MenuItem
                key={`daha-${index}`}
                title={item.title}
                href={item.href}
                iconActive={item.iconActive}
                iconDeactive={item.iconDeactive}
                isActive={pathname === item.href}
                isParent={item.isParent}
                isToggled={isToggled}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
