import { Modal } from "../../../../../components/modal";
import { BaseModalProps } from "../../../../../types/modal.types";
import group from "../../../../../assets/images/Group.png";
import maxumim from "../../../../../assets/images/maximum.png";
import world from "../../../../../assets/images/world.png";
import { IconArrowUpRight } from "../../../../../components/icons/icons";

export const CardModal: React.FC<BaseModalProps> = ({
  state,
  onCloseModal,
}: BaseModalProps) => {
  return (
    <Modal
      state={state}
      title="Tanımlı Kart Listesi"
      small={true}
      onCloseModal={onCloseModal}
      subTitle="Mayo spinach lasagna NY personal. Burnt lot Hawaiian olives Hawaiian white tomato tomato anchovies. Ricotta white and pan mouth."
    >
      <>
        <div className="p-1 border-t">
          <div className="text-sm flex items-center my-6">
            <span className="text-base-content-60">Site : </span>
            <span className="font-medium underline">Kahraman Beyaz Eşya</span>
            <span>
              <IconArrowUpRight width={18} height={18} viewBox="0 0 18 18" />
            </span>
          </div>
          <div>
            <div className="w-full h-[104px] flex justify-center items-center border border-base-content-20 rounded-2.5xl">
              <img src={group} alt="" />
            </div>
            <div className="w-full h-[104px] flex justify-center items-center border border-base-content-20 rounded-2.5xl mt-4">
              <img src={maxumim} alt="" />
            </div>
            <div className="w-full h-[104px] flex justify-center items-center border border-base-content-20 rounded-2.5xl mt-4">
              <img src={world} alt="" />
            </div>
          </div>
        </div>
      </>
    </Modal>
  );
};
