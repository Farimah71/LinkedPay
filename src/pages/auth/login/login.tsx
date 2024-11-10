import { ReactNode } from "react";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { RequestLogin } from "./components/request-login";
import { VerifyPhone } from "../components/GSM";
import { ErrorModal } from "../../../components/actionModals/error";
import { Modal } from "../../../components/modal";
import { Loading } from "../../../components/loading";

const formRender: Record<number, ReactNode> = {
  0: <RequestLogin />,
  1: <VerifyPhone actionType="login" methodProviderName="verifysmspost" />,
};

const Login: React.FC = () => {
  const { step } = useAppSelector((state) => state.loginSlice);
  const { showModal } = useAppSelector((state) => state.showModalSlice);
  const { errors, errorCode } = useAppSelector((state) => state.errorsSlice);

  return (
    <>
      {formRender[step!]}

      {showModal.type == "success" && (
        <Modal
          state={showModal.isShow}
          title="Yönlendiriliyorsunuz..."
          subTitle="Lütfen Bekleyiniz."
          shouldForceSignout
          small
          isActionModal
          icon={<Loading />}
        ></Modal>
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

export default Login;
