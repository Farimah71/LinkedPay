import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { Modal } from "../../../../components/modal";
import { SettingModalsProps } from "./setting-modals.types";

export const VerifyPhone: React.FC<SettingModalsProps> = ({
  state,
  onCloseModal,
}) => {
  return (
    <Modal
      title="Yeni Numarana Gelen Kodu Doğrula"
      subTitle="Telefonuna kod gönderdik. Kimliğinden emin olmalıyız."
      state={state}
      onCloseModal={onCloseModal}
      small
    >
      <form>
        <div className="w-full h-full flex flex-col justify-center items-center mt-6">
          <Input label="Doğrulama Kodu" type="text" className="w-full" />
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
      </form>
    </Modal>
  );
};
