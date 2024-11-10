import { Button } from "../../../../components/button";
import { IconArrowDown } from "../../../../components/icons/icons";
import PlusFillBlue from "../../../../assets/images/PlusFillBlue.svg";
import UserAvatar from "../../../../assets/images/user.png";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { changeToken } from "../../../../redux/actions/auth/change-token";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type ApplicationGridProps = {
  setShow: (type: "individual" | "corporate" | "") => void;
  userCustomerData: [];
  requestData: [];
};

export const ApplicationGrid: React.FC<ApplicationGridProps> = ({
  setShow,
  userCustomerData,
  requestData,
}) => {

  const { isButtonLoading }=useAppSelector(state => state.buttonLoadingSlice);

  const [customerId , setCustomerId]=useState<number>(0);

  const dispatch=useAppDispatch();

  const navigate=useNavigate();

  const personalCustomer = userCustomerData.length
    ? userCustomerData.filter((customer: { customerNo: string }) => {
        return customer.customerNo.startsWith("1");
      })
    : [];

    const selectCompany = (id : string | number) => {
      dispatch(changeToken(id , navigate));
    };

  return (
    <div className="mt-8 me-6">
      <div className="mb-16">
        <p className="font-semibold text-lg mb-5">Kurumsal</p>
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-5">
          {userCustomerData.length > 0 &&
            userCustomerData.map(
              (customer: any) =>
                requestData.length > 0 &&
                requestData.map(
                  (request: any) =>
                    customer.customerNo.startsWith(2) && (
                      <p
                        key={customer.id}
                        className="flex flex-col gap-x-5 p-8 justify-center bg-actual-white rounded-3xl"
                      >
                        <div className="flex justify-between border-b w-full pb-8">
                          <div className="flex items-center">
                            <span className="w-12 h-12 flex justify-center items-center bg-primary/5 text-primary rounded-full">
                              RS
                            </span>
                            <div className="flex flex-col gap-y-1 ml-6">
                              <span className="text-base-content-40">
                                Firma
                              </span>
                              <span
                                className="text-lg font-medium"
                                title={customer.companyTitle}
                              >
                                {customer.companyTitle.length > 16
                                  ? customer.companyTitle.substring(0, 15) +
                                    "..."
                                  : customer.companyTitle}
                              </span>
                            </div>
                          </div>
                          {customer.customerId == request.id ? (
                            <Button
                              variant={request.status == 2 ? "info" : "error"}
                              className="!text-actual-white !text-base !rounded-full mt-2"
                              size="small"
                            >
                              {request.status == 2
                                ? "Beklemede"
                                : request.status == 3
                                ? "Operasyon Reddetti"
                                : request.status == 4
                                ? "Fesih Reddetti"
                                : request.status == 5
                                ? "GIB Reddetti"
                                : "Skor Nedeniyle Reddedildi"}
                            </Button>
                          ) : (
                            <Button
                              isLight
                              variant="primary"
                              className="!text-primary !rounded-full"
                              size="small"
                              onClick={() => {
                                selectCompany(customer.id)
                                setCustomerId(customer.id)
                              }}
                              isLoading={customerId === customer.id ? isButtonLoading : false}
                            >
                              <span>Devam Et</span>
                              <IconArrowDown
                                width={18}
                                height={18}
                                viewBox="0 0 20 20"
                                className="-rotate-90 -mt-1"
                              />
                            </Button>
                          )}
                        </div>

                        <div className="flex gap-x-5 pt-8">
                          <div className="flex gap-x-2">
                            <img
                              src={UserAvatar}
                              className="rounded-full w-6 h-6"
                            />
                            <span>{customer.authPersonTitle}</span>
                          </div>

                          <span className="w-2 h-2 mt-2 bg-black/5 rounded-full"></span>
                          <div className="text-nowrap">
                            <span>Yetkiniz: </span>
                            <span className="text-primary">Yönetici</span>
                          </div>
                        </div>
                      </p>
                    )
                )
            )}

          <span
            className="flex gap-x-5 items-center justify-center p-8 h-[220px] bg-actual-white rounded-3xl cursor-pointer"
            onClick={() => setShow("corporate")}
          >
            <img src={PlusFillBlue} width={50} />
            <div className="font-semibold">Yeni Kurumsal Başvuru</div>
          </span>
        </div>
      </div>

      <div className="mb-10">
        <p className="font-semibold text-lg mb-5">Bireysel</p>
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-5">
          {userCustomerData.length > 0 &&
            userCustomerData.map(
              (customer: any) =>
                requestData.length > 0 &&
                requestData.map(
                  (request: any) =>
                    customer.customerNo.startsWith(1) && (
                      <p
                        key={customer.customerId}
                        className="flex flex-col gap-x-5 p-8 justify-center bg-actual-white rounded-3xl"
                      >
                        <span className="flex border-b w-full items-center pb-8">
                          <img
                            src={UserAvatar}
                            className="rounded-full w-10 h-10"
                          />
                          <div className="flex flex-col gap-y-1 ml-6">
                            <span className="text-base-content-40">
                              İyi günler,
                            </span>
                            <span className="text-lg font-semibold">
                              {customer.authPersonTitle}
                            </span>
                          </div>
                          {customer.customerId == request.id && (
                            <div
                              className={`text-actual-white text-nowrap rounded-full ml-auto p-2 text-xs ${
                                request.status == 1 ? "bg-info" : "bg-error"
                              }`}
                            >
                              {request.status == 1
                                ? "Onay Bekliyor"
                                : "Başvuru reddedildi"}
                            </div>
                          )}
                        </span>

                        <div className="flex gap-x-5 pt-8">
                          <div>
                            <span>Hesap No: </span>
                            <span className="text-primary">1234567890</span>
                          </div>
                        </div>
                      </p>
                    )
                )
            )}

          {!personalCustomer.length && (
            <span
              className="flex gap-x-5 items-center justify-center h-[220px] p-8 bg-actual-white rounded-3xl cursor-pointer"
              onClick={() => setShow("individual")}
            >
              <img src={PlusFillBlue} width={50} />
              <div className="font-semibold">Yeni Bireysel Başvuru</div>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
