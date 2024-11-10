import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { PasswordInfo } from "./components/password-info";
import { SetPassword } from "./components/set-password";
import { VerifyEmail } from "../components/Email";
import { SuccessModal } from "../../../components/actionModals/success";
import { useNavigate } from "react-router-dom";
import { ErrorModal } from "../../../components/actionModals/error";
import { setShowModal } from "../../../redux/reducers/show-modal";
import { setForgetPasswordStep } from "../../../redux/reducers/auth/forget-password";

const formRender: Record<number, ReactNode> = {
  0: <PasswordInfo />,
  1: (
    <VerifyEmail
      actionType="forgot-password"
      methodProviderName="forgotpasswordpersonalverifyemailpost"
    />
  ),
  2: <SetPassword />,
};

const ForgotPassword = () => {
  const { step } = useAppSelector((state) => state.forgetPasswordSlice);
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
            navigate("/login");
            dispatch(setShowModal({ isShow: false, type: "" }));
            dispatch(setForgetPasswordStep(0));
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

export default ForgotPassword;
