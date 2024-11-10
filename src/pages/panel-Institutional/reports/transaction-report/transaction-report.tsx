import { useEffect, useState } from "react";
import { Button } from "../../../../components/button";
import {
  IconArrowRight,
  IconFilter,
  IconSearch,
} from "../../../../components/icons/icons";
import { DetailModal } from "./modal/detail";
import { FilterModal } from "./modal/filter";
import { CancelModal } from "./modal/cancel";
import { RefundModal } from "./modal/refund";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { getVposTransaction } from "../../../../redux/actions/reports/transaction";
import { Select } from "antd";
import { TransactionReportGrid } from "./components/grid";
import { TransactionReportNoContent } from "./components/no-content";
import { TopLoader } from "../../../../components/top-loader";
import { setShowModal } from "../../../../redux/reducers/show-modal";

const TransactionReport = () => {
  const { info:transactionData , filterValue }=useAppSelector(state => state.transactionReportSlice);
  const { isContentLoading }=useAppSelector(state => state.contentLoadingSlice);
  const { showModal:{isShow , type} }=useAppSelector(state => state.showModalSlice);

  const dispatch=useAppDispatch();

  useEffect(() => {
    dispatch(getVposTransaction(filterValue))
  } , [filterValue]);

  

  return (
    <>
    {
      isContentLoading ?
      <TopLoader /> :
      <>
      <div className="container w-full flex items-center gap-6 text-sm text-base-content-40 p-4">
        <p>Trpos</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p>Raporlar</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p className="text-primary">İşlem Raporları</p>
      </div>
      <div className="outlet w-full h-full container p-4 pb-8">
        <div className="w-full h-full bg-actual-white rounded-2.5xl p-6">
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex justify-between items-center">
              <div>
                <h1 className="text-[18px] text-base-content font-rubik font-medium">
                  İşlem Raporları
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
                      <div className={`h-[58px] w-20 rounded-2xl pr-2 pl-4 pt-2.5 border`}>
                        <Select
                          className="number_select"
                          options={[
                            { value: 1, label: "1" },
                            { value: 2, label: "2" },
                            { value: 3, label: "3" },
                            { value: 4, label: "4" },
                            { value: 5, label: "5" },
                          ]}
                          placeholder="Se..."
                          style={{ minWidth: 60 }}
                          size="small"
                          variant="borderless"
                          listHeight={150}
                        />
                      </div>

                <Button
                  onClick={() => dispatch(setShowModal({isShow:true , type:"filter"}))}
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
                !transactionData.length ?
                <TransactionReportGrid /> :
                <TransactionReportNoContent />
              }
            </div>
          </div>
        </div>
      </div>
      <DetailModal
        state={type === "detail"}
        onCloseModal={() => dispatch(setShowModal({isShow:false , type:""}))}
        cancelModalHandler={() => {
          dispatch(setShowModal({isShow:true , type:"cancel"}))
        }}
        refundModalHandler={() => {
          dispatch(setShowModal({isShow:true , type:"refund"}))
        }}
      />
      <FilterModal
        state={type === "filter"}
        onCloseModal={() => dispatch(setShowModal({isShow:false , type:""}))}
      />
      <CancelModal
        state={type == "cancel"}
        onCloseModal={() => dispatch(setShowModal({isShow:false , type:""}))}
      />
      <RefundModal
        state={type == "refund"}
        onCloseModal={() => dispatch(setShowModal({isShow:false , type:""}))}
      />
    </>
    }
    </>
  );
};

export default TransactionReport;
