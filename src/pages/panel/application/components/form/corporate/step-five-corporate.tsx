import { Button } from "../../../../../../components/button";
import { setCompanyApplicationStep } from "../../../../../../redux/reducers/application/company-application";
import { useAppDispatch } from "../../../../../../hooks/redux-hooks";
import { BaseModalProps } from "../../../../../../types/modal.types";
import CheckCircleLight from "../../../../../../assets/images/CheckCircleLight.svg";

export const StepFiveCorporate: React.FC<Omit<BaseModalProps, "state">> = ({
  onCloseModal,
}) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex flex-col gap-y-3 items-center text-center mb-3">
        <img src={CheckCircleLight} width={50} className="mx-auto" />
        <span className="text-xl font-bold">
          Tebrikler Başvurunuz Alınmıştır!
          <br /> Şimdi Sıra Bizde.
        </span>
        <p className="text-base-content-60">
          Verdiğiniz bilgileri kontrol edip, size en kısa sürede e-posta ile
          bilgi vereceğiz.
        </p>
      </div>

      <Button
        variant="primary"
        shape="full"
        className="my-3"
        onClick={() => {
          onCloseModal && onCloseModal();
          dispatch(setCompanyApplicationStep(1));
        }}
      >
        Tamam
      </Button>
    </>
  );
};
