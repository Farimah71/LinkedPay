import { StepperModal } from "../../../../../components/stepperModal";
import { CreateModalProps } from "../create.types";

export const CreateIndividual: React.FC<CreateModalProps> = ({
  state,
  children,
  current,
  title,
  subTitle,
  hasCloseButton,
  onCloseModal,
}) => {
  return (
    <StepperModal
      state={state}
      title={title}
      subTitle={subTitle}
      onCloseModal={onCloseModal}
      small
      hasCloseButton={hasCloseButton}
      current={current}
      titlesList={[
        {
          title: "Kişisel Bilgiler",
        },
        {
          title: "Evraklar",
        },
        {
          title: "Sonuç",
        },
      ]}
    >
      {children}
    </StepperModal>
  );
};
