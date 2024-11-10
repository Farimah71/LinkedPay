import React, { Dispatch, SetStateAction } from "react";
import clouds from "../../../../../assets/images/Clouds.svg"
import { IconArrowRight, IconPlus } from "../../../../../components/icons/icons";
import { Button } from "../../../../../components/button";
import { useAppDispatch } from "../../../../../hooks/redux-hooks";
import { setShowModal } from "../../../../../redux/reducers/show-modal";

export const TransactionReportNoContent : React.FC = () => {
    const dispatch=useAppDispatch();
    return (
        <div className="outlet w-full h-full flex-grow flex justify-center items-center">
                            <div className="text-center">
                            <img src={clouds} alt="" />
                            <h1 className="text-base-content mt-2">
                                Hiç bir site eklemedin
                            </h1>
                            <p className="text-xs text-base-content-40 mt-1">
                                Şimdilik...
                            </p>
                            </div>
                        </div>
    )
}