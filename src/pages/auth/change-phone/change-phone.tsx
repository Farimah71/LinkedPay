import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { PhoneInfo } from "./components/phone-info";
import { ReactNode } from "react";
import { VerifyEmail } from "../components/Email";
import { VerifyPhone } from "../components/GSM";
import { SuccessModal } from "../../../components/actionModals/success";
import { setShowModal } from "../../../redux/reducers/show-modal";
import { ErrorModal } from "../../../components/actionModals/error";
import { setChangePhoneStep } from "../../../redux/reducers/auth/change-phone";

const formRender: Record<number, ReactNode> = {
  0: <PhoneInfo />,
  1: (
    <VerifyPhone
      actionType="change-phone"
      methodProviderName="changegsmverifysmspost"
    />
  ),
  2: (
    <VerifyEmail
      actionType="change-phone"
      methodProviderName="changegsmverifyemailpost"
    />
  ),
};

const ChangePhone = () => {
  const { step } = useAppSelector((state) => state.changePhoneSlice);
  const { showModal } = useAppSelector((state) => state.showModalSlice);
  const { errors, errorCode } = useAppSelector((state) => state.errorsSlice);
  const { message: successMessage } = useAppSelector(
    (state) => state.successMessageSlice
  );

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      {formRender[step!]}

      {showModal.type == "success" && (
        <SuccessModal
          state={showModal.isShow}
          title="İşlem Başarılı"
          confirmLabel="Tekrar Giriş Yap"
          subTitle={successMessage}
          isButtonOutline={false}
          onSubmit={() => {
            navigate("/");
            dispatch(setShowModal({ isShow: false, type: "" }));
            dispatch(setChangePhoneStep(0));
          }}
          shouldForceSignout
        />
      )}
      {showModal.type == "error" && (
        <ErrorModal
          state={showModal.isShow}
          subTitle={+errors[0] ? errors[1] : errors[0]}
          navigatePath={errorCode == 419 ? "/login" : ""}
        />
      )}
    </>
  );
};

export default ChangePhone;
