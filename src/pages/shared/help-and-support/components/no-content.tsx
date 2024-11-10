import { useState } from "react";
import { Button } from "../../../../components/button";
import { IconPlus } from "../../../../components/icons/icons";
import { CreateSupportRequest } from "../modal/create";
import clouds from "../../../../assets/images/Clouds.svg";

export const NoContentSupport = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModalHandler = () => {
    isOpenModal && setIsOpenModal(false);
  };

  return (
    <>
      <CreateSupportRequest
        state={isOpenModal}
        onCloseModal={closeModalHandler}
      />

      <div className="outlet w-full h-full container p-4 mt-4 pb-8">
        <div className="w-full h-full bg-actual-white rounded-2.5xl p-6">
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex justify-between items-center">
              <div>
                <h1 className="text-[20px] text-base-content font-semibold">
                  Destek Talepleriniz
                </h1>
                <p className="text-xs text-base-content-40 mt-2">
                  Lorem, ipsum.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Button
                  variant="primary"
                  className="text-sm !rounded-2xl"
                  onClick={() => setIsOpenModal(true)}
                  isInTop
                >
                  <IconPlus width={24} hanging={24} viewBox="0 0 24 24" />
                  Yeni Talep Oluştur
                </Button>
              </div>
            </div>
            <div className="outlet w-full h-[630px] flex-grow flex justify-center items-center">
              <div className="text-center">
                <img src={clouds} alt="" className="mx-auto" />
                <h1 className="text-base-content mt-2">
                  Hiç bir detsek talebi oluşturmadın.
                </h1>
                <p className="text-xs text-base-content-40 mt-1">Şimdilik...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
