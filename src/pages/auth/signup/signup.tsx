import { ReactNode } from "react";
import { PersonalInfo } from "./components/personal-info";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { VerifyPhone } from "../components/GSM";
import { VerifyEmail } from "../components/Email";
import { AuthModal } from "../../../components/actionModals/auth-modal";
import { useNavigate } from "react-router-dom";
import { setSignupStep } from "../../../redux/reducers/auth/signup";
import { setShowModal } from "../../../redux/reducers/show-modal";
import { ErrorModal } from "../../../components/actionModals/error";

const formRender: Record<number, ReactNode> = {
  0: <PersonalInfo />,
  1: (
    <VerifyPhone actionType="signup" methodProviderName="confirmphoneNumber" />
  ),
  2: (
    <VerifyEmail
      actionType="signup"
      methodProviderName="confirmemailforregister"
    />
  ),
};

const SignUp: React.FC = () => {
  const { step } = useAppSelector((state) => state.signupSlice);
  const { showModal } = useAppSelector((state) => state.showModalSlice);
  const { errors, errorCode } = useAppSelector((state) => state.errorsSlice);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      {formRender[step!]}

      {showModal.type == "success" && (
        <AuthModal
          state={showModal.isShow}
          title="Aramıza Hoşgeldiniz."
          description="İş birliğimizin İlk Adımı tamamlandı."
          subTitle="Başvuru işlemlerinizi tamamlamanız sonrası hemen ödeme almaya başlayabilirsiniz."
          confirmLabel="Giriş Yap"
          isTitleGreen
          isButtonOutlined={false}
          shouldForceSignout
          onSubmit={() => {
            navigate("/");
            dispatch(setSignupStep(0));
            dispatch(setShowModal({ isShow: false, type: "success" }));
          }}
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

export default SignUp;
