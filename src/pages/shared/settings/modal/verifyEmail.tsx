import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { Modal } from "../../../../components/modal";
import { SettingModalsProps } from "./setting-modals.types";

export const VerifyEmail: React.FC<SettingModalsProps> = ({
  state,
  onCloseModal,
}) => {
  return (
    <Modal
      title="E-Postana Gelen Kodu Doğrula"
      subTitle="E-Postana kod gönderdik. Kimliğinden emin olmalıyız."
      state={state}
      onCloseModal={onCloseModal}
      small
    >
      <div className="w-full h-full flex flex-col justify-center items-center mt-6">
        <Input label="Doğrulama Kodu" type="text" />
        <div className="mt-6 w-full">
          <Button variant="primary" shape="full">
            Devam Et
          </Button>
        </div>
      </div>

      <p className="text-sm flex gap-x-2 justify-center mt-6">
        Kod Gelmediyse
        <span className="text-primary font-semibold cursor-pointer">
          Tekrar Kod Gönder
        </span>
      </p>
    </Modal>
  );
};
