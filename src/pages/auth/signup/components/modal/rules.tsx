import { ClockLoader } from "react-spinners";
import { Button } from "../../../../../components/button";
import { Modal } from "../../../../../components/modal";
import { RuleModalProps } from "./rules.types";

export const RuleModal: React.FC<RuleModalProps> = ({
  state,
  title,
  content,
  isLoading,
  handleRuleAccept,
  handleCloseModal,
}) => {
  const handleClick = () => {
    handleRuleAccept && handleRuleAccept();
  };

  return (
    <Modal
      state={state}
      onCloseModal={handleCloseModal}
      title={isLoading ? "" : title}
      subTitle={isLoading ? "" : "Son Düzenleme Tarihi: 28 Nisan 2024, Pazar"}
    >
      {
        isLoading ? (
          <div className="lg:h-[400px] h-[300px] flex justify-center items-center">
            <ClockLoader color="#36d7b7" size={40} />
          </div>
        ) :
        <div className="lg:h-[400px] h-[300px] overflow-y-scroll">
          <p className="rule__title">
            {content?.title}
          </p>
          <span className="rule__text">{content?.text}</span>
        </div>
      }
      <Button
        onClick={handleClick}
        variant="primary"
        shape={"full"}
        className="mt-3"
      >
        Kabul Et ve Kapat
      </Button>
    </Modal>
  );
};
