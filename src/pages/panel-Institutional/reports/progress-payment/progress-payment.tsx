import { Button } from "../../../../components/button";
import {
  IconArrowRight,
  IconFilter,
  IconSearch,
} from "../../../../components/icons/icons";
import { NumberSelectInput } from "../../../../components/number-select";
import { useForm } from "react-hook-form";
import { ProgressPaymentGrid } from "./components/grid";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { ProgressPaymentReportNoContent } from "./components/no-content";
import { useEffect } from "react";
import { getVposProgressPayment } from "../../../../redux/actions/reports/progress-payment";
import { TopLoader } from './../../../../components/top-loader/top-loader';

const ProgressPayment = () => {
  const { info:progressPaymentData , filterValue }=useAppSelector(state => state.progressPaymentReportSlice);
  const { isContentLoading }=useAppSelector(state => state.contentLoadingSlice);

  const dispatch=useAppDispatch();

  useEffect(() => {
    dispatch(getVposProgressPayment(filterValue));
  } , []);

  const { register , handleSubmit , control }=useForm();

  return (
    <>
      {
        isContentLoading ? <TopLoader /> : (
          <>
            <div className="container w-full flex items-center gap-6 text-sm text-base-content-40 p-4">
              <p>Trpos</p>
              <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
              <p>Raporlar</p>
              <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
              <p className="text-primary">Hakedişler</p>
            </div>
            <div className="outlet w-full h-full container p-4 pb-8">
              <div className="w-full h-full bg-actual-white rounded-2.5xl p-6">
                <div className="w-full h-full flex flex-col">
                  <div className="w-full flex justify-between items-center">
                    <div>
                      <h1 className="text-[18px] text-base-content font-rubik font-medium">
                        Hakedişler
                      </h1>
                      <p className="subTitle_text text-xs text-base-content-40 mt-2">
                        Lorem, ipsum.
                      </p>
                    </div>
                    <div className="flex items-center gap-6">
                      <Button
                        isOutline={true}
                        className="text-sm !rounded-2xl !border-[#e5e7eb] !text-base-content-20"
                      >
                        <IconSearch
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          className="text-base-content"
                        />
                        Ara...
                      </Button>

                      <NumberSelectInput
                        control={control}
                        name=""
                        placeholder="Se..."
                        options={[
                          { value: 5, label: "5" },
                          { value: 6, label: "6" },
                          { value: 7, label: "7" },
                        ]}
                      />

                      <Button
                        className="text-sm !rounded-2xl !pr-14 !border !border-[#e5e7eb]"
                        isInTop
                        isOutline={true}
                      >
                        <IconFilter
                          width={20}
                          hanging={20}
                          viewBox="0 0 20 20"
                          className="text-base-content"
                        />
                        Filtrele
                      </Button>
                    </div>
                  </div>
                  <div className="w-full flex-grow mt-6">
                    {
                      !progressPaymentData.length ?
                      <ProgressPaymentGrid /> :
                      <ProgressPaymentReportNoContent />
                    }
                  </div>
                </div>
              </div>
            </div>
      </>
        )
      }
    </>
  );
};

export default ProgressPayment;
