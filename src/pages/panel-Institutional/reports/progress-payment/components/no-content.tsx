import React from "react";
import clouds from "../../../../../assets/images/Clouds.svg"

export const ProgressPaymentReportNoContent : React.FC = () => {
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