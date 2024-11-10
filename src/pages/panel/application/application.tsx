import { ReactNode, useEffect, useState } from "react";
import { CreateApplication } from "./components/create-application";
import { StepOneIndividual } from "./components/form/individual/step-one-individual";
import { StepTwoIndividual } from "./components/form/individual/step-two-individual";
import { StepThreeIndividual } from "./components/form/individual/step-three-individual";
import { CreateIndividual } from "./modal/individual/create";
import { CreateCorporate } from "./modal/corporate/create";
import { StepOneCorporate } from "./components/form/corporate/step-one-corporate";
import { StepTwoCorporate } from "./components/form/corporate/step-two-corporate";
import { StepThreeCorporate } from "./components/form/corporate/step-three-corporate";
import { StepFourCorporate } from "./components/form/corporate/step-four-corporate";
import { StepFiveCorporate } from "./components/form/corporate/step-five-corporate";
import { ApplicationGrid } from "./components/grid";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { getAllUserCustomer } from "../../../redux/actions/settings/user-customer";
import { getFilter } from "../../../redux/actions/settings/request";
import { TopLoader } from "../../../components/top-loader";
import { ErrorModal } from "../../../components/actionModals/error";
import { useNavigate } from "react-router-dom";

const Application = () => {
  const { info: userCustomerData } = useAppSelector(
    (state) => state.userCustomerSlice
  );
  const { step: companyApplicationStep } = useAppSelector(
    (state) => state.companyApplicationSlice
  );
  const { step: customerApplicationStep } = useAppSelector(
    (state) => state.customerApplicationSlice
  );
  const { info: requestInfo } = useAppSelector((state) => state.requestSlice);
  const { showModal } = useAppSelector((state) => state.showModalSlice);
  const { errors } = useAppSelector((state) => state.errorsSlice);

  const [isShowCreatePage, setIsShowCreatePage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<
    "individual" | "corporate" | ""
  >("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllUserCustomer());
    dispatch(getFilter());
  }, []);

  useEffect(() => {
    if (userCustomerData.length > 0) {
      setIsShowCreatePage(false);
    }
  }, [userCustomerData]);

  const individual: Record<number, ReactNode> = {
    1: <StepOneIndividual />,
    2: <StepTwoIndividual />,
    3: <StepThreeIndividual onCloseModal={() => setIsModalOpen("")} />,
  };
  const corporate: Record<number, ReactNode> = {
    1: <StepOneCorporate />,
    2: <StepTwoCorporate />,
    3: <StepThreeCorporate />,
    4: <StepFourCorporate />,
    5: <StepFiveCorporate onCloseModal={() => setIsModalOpen("")} />,
  };

  const individualModalTitles: Record<number, string> = {
    1: "Bireysel Başvuru",
    2: "Gerekli Belgeler",
  };
  const corporateModalTitles: Record<number, string> = {
    1: "Kurumsal Başvuru",
    2: "Kurumsal Başvuru",
    3: "Yetkili Bilgileri",
    4: "Gerekli Belgeler",
  };

  return (
    <>
      <TopLoader />
      <CreateIndividual
        state={isModalOpen == "individual"}
        current={customerApplicationStep!}
        title={individualModalTitles[customerApplicationStep!]}
        subTitle={
          customerApplicationStep != 3 ? "Lütfen formu doldurunuz." : ""
        }
        hasCloseButton={customerApplicationStep != 3}
        onCloseModal={() => setIsModalOpen("")}
      >
        {individual[customerApplicationStep!]}
      </CreateIndividual>
      <CreateCorporate
        state={isModalOpen == "corporate"}
        current={companyApplicationStep!}
        title={corporateModalTitles[companyApplicationStep!]}
        subTitle={
          companyApplicationStep! != 5 ? "Lütfen formu doldurunuz." : ""
        }
        hasCloseButton={companyApplicationStep! != 5}
        onCloseModal={() => setIsModalOpen("")}
      >
        {corporate[companyApplicationStep!]}
      </CreateCorporate>
      {!isShowCreatePage && (
        <ApplicationGrid
          setShow={(type: typeof isModalOpen) => setIsModalOpen(type)}
          userCustomerData={userCustomerData}
          requestData={requestInfo}
        />
      )}
      {isShowCreatePage && (
        <CreateApplication createTypeHandler={(type) => setIsModalOpen(type)} />
      )}

      {showModal.type == "error" && (
        <ErrorModal
          state={showModal.isShow}
          subTitle={errors[0]}
          onCloseModal={() => navigate("/")}
        />
      )}
    </>
  );
};

export default Application;
