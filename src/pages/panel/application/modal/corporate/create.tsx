import { StepperModal } from "../../../../../components/stepperModal";
import { useAppSelector } from "../../../../../hooks/redux-hooks";
import { CreateModalProps } from "../create.types";

export const CreateCorporate: React.FC<CreateModalProps> = ({
  state,
  children,
  current,
  title,
  subTitle,
  hasCloseButton,
  onCloseModal,
}) => {
  const { error } = useAppSelector((state) => state.companyApplicationSlice);

  return (
    <StepperModal
      state={state}
      title={title}
      subTitle={subTitle}
      onCloseModal={onCloseModal}
      hasCloseButton={hasCloseButton}
      current={current}
      titlesList={[
        {
          title: "Kimlik",
        },
        {
          title: "Kurumsal Bilgiler",
        },
        {
          title: "Yetkili Bilgiler",
        },
        {
          title: "Evraklar",
        },
        {
          title: "Sonuç",
        },
      ]}
    >
      {Array.isArray(error) && error.length > 0 && (
        <ul className="flex flex-col gap-y-1 p-4 bg-red-50 border-red-100 list-none mt-3 me-2 rounded-xl">
          {error.map(
            (err, index) =>
              !+err && (
                <li key={index} className="text-error text-sm">
                  {err}
                </li>
              )
          )}
        </ul>
      )}
      {children}
    </StepperModal>
  );
};
