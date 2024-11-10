import BagFillGreen from "../../../../assets/images/BagFillGreen.svg";
import UserFillGreen from "../../../../assets/images/UserFillGreen.svg";
import { Button } from "../../../../components/button";
import { IconCheckmark } from "../../../../components/icons/icons";

type CreateApplicationProps = {
  createTypeHandler: (type: "individual" | "corporate") => void;
};

const features = [
  "Ödeme linki oluştur.",
  "Linklerini takip et.",
  "Raporlara ulaş.",
  "7/24 Destek al.",
  "Ertesi gün ödeme.",
];

export const CreateApplication: React.FC<CreateApplicationProps> = ({
  createTypeHandler,
}) => {
  return (
    <div className="outlet container p-8 grid gap-8 xl:grid-cols-2">
      <div className="bg-actual-white rounded-3xl p-10">
        <img src={BagFillGreen} width={50} />
        <div className="font-semibold my-4">İşim İçin POS</div>
        <p className="text-base-content-40 text-sm pb-8">
          Onions meatball pineapple thin broccoli buffalo bbq hand. Mayo Aussie
          olives parmesan pineapple spinach Bianca. Fresh green pineapple rib
          Philly. Pork onions deep platter bbq and meat. Mayo pizza bacon
          stuffed platter stuffed green sauce ranch pork.
        </p>
        <hr />

        <div className="my-8">
          {features.map((f) => (
            <div key={f.substring(0, 3)} className="flex">
              <IconCheckmark color="#22B789" width={20} />
              <span className="text-sm">{f}</span>
            </div>
          ))}
        </div>
        <hr />
        <Button
          variant="primary"
          shape="full"
          className="mt-8"
          onClick={() => createTypeHandler("corporate")}
        >
          Kurumsal Başvuru
        </Button>
      </div>
      <div className="bg-actual-white rounded-3xl p-10">
        <img src={UserFillGreen} width={50} />
        <div className="font-semibold my-4">Kendim İçin POS</div>
        <p className="text-base-content-40 text-sm pb-8">
          Onions meatball pineapple thin broccoli buffalo bbq hand. Mayo Aussie
          olives parmesan pineapple spinach Bianca. Fresh green pineapple rib
          Philly. Pork onions deep platter bbq and meat. Mayo pizza bacon
          stuffed platter stuffed green sauce ranch pork.
        </p>
        <hr />

        <div className="my-8">
          {features.map((f) => (
            <div key={f.substring(0, 3)} className="flex">
              <IconCheckmark color="#22B789" width={20} />
              <span className="text-sm">{f}</span>
            </div>
          ))}
        </div>
        <hr />
        <Button
          variant="success"
          shape="full"
          className="mt-8 !text-white"
          onClick={() => createTypeHandler("individual")}
        >
          Bireysel Başvuru
        </Button>
      </div>
    </div>
  );
};
