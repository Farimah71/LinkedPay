import { useLocation, useNavigate } from "react-router-dom";
import {
  IconArrowDown,
  IconNotification,
} from "../../../components/icons/icons";
import { getUserDataFromLocalstorage } from "../../../helper/get-user-data-from-local";
import { HeaderProps } from "./header.types";
import { ProfileMenuItems } from "../../../data/profile-dropdown-items";
import { useAppDispatch } from "../../../hooks/redux-hooks";
import user from "../../../assets/images/user.png";
import Dropdown from "antd/es/dropdown";
import Space from "antd/es/space";

export const Header: React.FC<HeaderProps> = ({ isToggled }) => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const items = ProfileMenuItems(dispatch, navigate);

  return (
    <header
      className={`w-full flex items-center border-b-2 border-actual-white duration-500 ease-linear ${
        isToggled ? "ps-4" : "ps-12"
      }`}
    >
      <div className="w-full flex justify-between items-center p-4 pe-8">
        <div className="flex gap-10 items-center">
          <div className="flex flex-col gap-[1px]">
            <p className="text-[15px] text-base-content">
              {pathname.includes("/dashboard/helpAndSupport")
                ? "Yardım ve Destek"
                : pathname.includes("/dashboard/settings")
                ? "Ayarlar"
                : pathname == "/dashboard/application"
                ? "Başvuru Yap"
                : "Raven Soft"}
            </p>
            <div className="flex items-center gap-2">
              <div className="w-[5px] h-[5px] bg-success rounded-full"></div>
              <p className="text-sm text-base-content-40">
                {pathname.includes("/dashboard/helpAndSupport") ||
                pathname.includes("/dashboard/settings") ||
                pathname == "/dashboard/application"
                  ? "Trpos"
                  : "Kurumsal"}
              </p>
            </div>
          </div>
          {!pathname.includes("/dashboard/helpAndSupport") && (
            <div
              className={`flex items-center cursor-pointer gap-2 px-4 py-3 bg-base-content-2 rounded-2.5xl text-[12px] ${
                localStorage.trpos__user_type == 0 &&
                pathname.includes("/dashboard/application") &&
                "hidden"
              }`}
            >
              <p>Değiştir</p>
              <IconArrowDown width={20} height={20} viewBox="0 0 20 20" />
            </div>
          )}
        </div>

        <div className="flex gap-10">
          <div className="px-[14px] py-[12px] border rounded-[18px]">
            <IconNotification
              width={17}
              height={20}
              viewBox="0 0 24 24"
              fill="black"
            />
          </div>

          <Dropdown menu={{ items }}>
            <Space>
              <div className="flex items-center gap-14 px-2 py-1 bg-actual-white rounded-2xl cursor-pointer">
                <div className="flex items-center gap-2">
                  <img src={user} className="w-[30px] h-[30px]" alt="" />
                  <div className="flex flex-col gap-[1px]">
                    <p className="text-xs text-base-content-40">Üye</p>
                    <p className="text-xs text-base-content font-medium">
                      {getUserDataFromLocalstorage("userTitle")}
                    </p>
                  </div>
                </div>
                <div>
                  <IconArrowDown
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    className="text-base-content-40"
                  />
                </div>
              </div>
            </Space>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};
