import { IconArrowRight } from "../../../components/icons/icons";
import POS from "../../../assets/images/POS.svg";

const PhysicalPOS = () => {
  return (
    <>
      <div className="container w-full flex items-center gap-6 text-sm text-base-content-40 p-4">
        <p>Trpos</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p className="text-primary">Fiziki POS</p>
      </div>
      <div className="w-full h-full container p-4 mt-4 pb-8">
        <div className="w-full h-full bg-actual-white rounded-2.5xl p-6">
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-[630px] flex-grow flex justify-center items-center">
              <div className="text-center">
                <img
                  src={POS}
                  alt=""
                  width={80}
                  className="mx-auto max-w-fit mb-8"
                />
                <div className="flex flex-col gap-y-3">
                  <span>Fiziki POS Hizmetimiz</span>
                  <h1 className="text-xl font-bold tracking-[0.7em]">
                    ÇOK YAKINDA
                  </h1>
                  <p className="text-xs text-base-content-40 mt-1 tracking-[0.5em]">BURADA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhysicalPOS;
