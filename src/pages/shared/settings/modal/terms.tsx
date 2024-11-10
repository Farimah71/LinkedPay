import { Modal } from "../../../../components/modal";
import { SettingModalsProps } from "./setting-modals.types";

type Termsprops = SettingModalsProps & {
  rule: { title: string; content: string };
};

export const Terms: React.FC<Termsprops> = ({ rule, state, onCloseModal }) => {
  return (
    <Modal
      title="Trpos Kullanıcı Sözleşmesi"
      subTitle="Son Düzenleme Tarihi: 28 Nisan 2024, Pazar"
      state={state}
      onCloseModal={onCloseModal}
      small
    >
      <div className="mb-4">
        <p className="rule__title">{rule?.title}</p>
        <span className="rule__text">{rule?.content}</span>
      </div>
    </Modal>
  );
};
