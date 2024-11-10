import React, { Dispatch, SetStateAction } from "react";
import clouds from "../../../../assets/images/Clouds.svg"
import { IconArrowRight, IconPlus } from "../../../../components/icons/icons";
import { Button } from "../../../../components/button";
import { useAppDispatch } from "../../../../hooks/redux-hooks";
import { setShowModal } from "../../../../redux/reducers/show-modal";

export const NoContentInstitutionalWebManagement : React.FC = () => {
    const dispatch=useAppDispatch();
    return (
        <>
            <div className="container w-full flex items-center gap-6 text-sm text-base-content-40 p-4">
                <p>Trpos</p>
                <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
                <p>Web Site Yönetimi</p>
                <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
                <p className="text-primary">Liste</p>
            </div>
            <div className="outlet w-full h-full container p-4 pb-8">
                <div className="w-full h-full bg-actual-white rounded-2.5xl p-6">
                <div className="w-full h-full flex flex-col">
                    <div className="w-full flex justify-between items-center">
                    <div>
                        <h1 className="text-[20px] text-base-content font-semibold">
                        Web Siteleriniz
                        </h1>
                        <p className="subTitle_text text-xs text-base-content-40 mt-2">
                        Lorem, ipsum.
                        </p>
                    </div>
                    <div>
                        <Button
                        onClick={() => dispatch(setShowModal({isShow:true , type:"create"}))}
                        variant="primary"
                        className="text-sm !rounded-2xl"
                        isInTop
                        >
                        <IconPlus width={24} hanging={24} viewBox="0 0 24 24" />
                        Yeni Site Ekle
                        </Button>
                    </div>
                    </div>
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
                    </div>
                    </div>
            </div>
        </>
    )
}