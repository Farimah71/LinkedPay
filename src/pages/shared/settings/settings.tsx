import { useState } from "react";
import {
  IconArrowRight,
  IconEmail,
  IconMessages,
  IconPasswordReload,
  IconPen,
  IconPhone,
  IconVoicemail,
} from "../../../components/icons/icons";
import { NumberSelectInput } from "../../../components/number-select";
import { Toggle } from "../../../components/toggle";
import { EditPassword } from "./modal/password";
import { EditEmail } from "./modal/email";
import { Terms } from "./modal/terms";
import { SuccessModal } from "../../../components/actionModals/success";
import { EditPhone } from "./modal/phone";
import { VerifyEmail } from "./modal/verifyEmail";
import { useNavigate } from "react-router-dom";
import { VerifyPhone } from "./modal/verifyPhone";
import TermsData from "../../../data/trpos_rules.json";

type ModalTypes =
  | "password"
  | "phone"
  | "email"
  | "verifyCodePhone"
  | "verifyCodeEmail"
  | "successNavigateLogin"
  | "successOK"
  | "error"
  | "terms"
  | "";

type TermsDataType = {
  title: string;
  content: string;
};

const Settings = () => {
  const [isModalOpen, setIsModalOpen] = useState<ModalTypes>("");
  const [rule, setRule] = useState<1 | 2 | 3>(1);

  const navigate = useNavigate();

  const closeModalHandler = () => {
    setIsModalOpen("");
  };
  const ruleSelector = (ruleNum: number) => {
    const rule: Record<number, TermsDataType> = {
      1: TermsData.rule_1,
      2: TermsData.rule_2,
      3: TermsData.rule_3,
    };
    return rule[ruleNum];
  };

  return (
    <>
      {/* begin:: Modals */}
      <EditPassword
        state={isModalOpen == "password"}
        onCloseModal={closeModalHandler}
      />
      <EditEmail
        state={isModalOpen == "email"}
        onCloseModal={closeModalHandler}
      />
      <EditPhone
        state={isModalOpen == "phone"}
        onCloseModal={closeModalHandler}
      />
      <VerifyEmail
        state={isModalOpen == "verifyCodeEmail"}
        onCloseModal={closeModalHandler}
      />
      <VerifyPhone
        state={isModalOpen == "verifyCodePhone"}
        onCloseModal={closeModalHandler}
      />

      <Terms
        state={isModalOpen == "terms"}
        onCloseModal={closeModalHandler}
        rule={ruleSelector(rule)}
      />
      <SuccessModal
        title="İşlem Başarılı"
        subTitle="Mayo spinach lasagna NY personal. Burnt lot Hawaiian olives Hawaiian white tomato tomato anchovies. Ricotta white and pan mouth. Burnt fresh bacon parmesan sauce broccoli. Pan style Aussie chicken lot green deep NY pineapple hand. Garlic olives Bianca tomato deep crust meatball deep beef platter. Bacon ranch beef pepperoni fresh tomatoes fresh."
        confirmLabel={
          isModalOpen == "successNavigateLogin"
            ? "Tekrar Giriş Yap"
            : isModalOpen == "successOK"
            ? "Tamam"
            : ""
        }
        state={
          isModalOpen == "successNavigateLogin" || isModalOpen == "successOK"
        }
        onCloseModal={closeModalHandler}
        onSubmit={() =>
          isModalOpen == "successNavigateLogin" && navigate("/login")
        }
        shouldForceSignout={isModalOpen == "successNavigateLogin"}
      />
      {/* end:: Modals */}

      <div className="outlet grid lg:grid-cols-2 grid-rows-2 gap-8 my-8 pe-8 grid-cols-1">
        {/* begin:: First row */}
        <div className="bg-actual-white rounded-2xl p-8">
          <p className="flex flex-col">
            <span className="font-bold">Oturum Açma Seçenekleriniz</span>
            <span className="subTitle_text text-sm text-base-content-40 mt-2 font-light">
              Bilgilerinizin güncel olduğundan emin olun.
            </span>
          </p>
          <div className="flex flex-col gap-y-5 mt-8">
            <div className="border-b flex justify-between pb-5">
              <div className="flex gap-x-2">
                <IconPhone width={20} className="mt-1" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Telefon Numaranız</span>
                  <span className="subTitle_text text-xs font-light text-base-content-40">
                    Son değiştirme: 7 Eylül 2023
                  </span>
                </div>
              </div>
              <div className="flex gap-x-1">
                <span className="me-2 text-sm font-medium mt-3 inline-block">
                  +90 552 895 67 07
                </span>
                <IconPen
                  className="mt-3 cursor-pointer text-primary"
                  onClick={() => setIsModalOpen("phone")}
                />
              </div>
            </div>
            <div className="border-b flex justify-between pb-5">
              <div className="flex gap-x-2">
                <IconEmail width={20} className="mt-1" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">E-Posta Adresiniz</span>
                  <span className="subTitle_text text-xs font-light text-base-content-40">
                    Son değiştirme: 7 Eylül 2023
                  </span>
                </div>
              </div>
              <div className="flex gap-x-1">
                <span className="me-2 text-sm font-medium mt-3 inline-block">
                  bestami.coban@raven.com.tr
                </span>
                <IconPen
                  className="mt-3 cursor-pointer text-primary"
                  onClick={() => setIsModalOpen("email")}
                />
              </div>
            </div>
            <div className="border-b flex justify-between pb-5">
              <div className="flex gap-x-2">
                <IconPhone width={20} className="mt-1" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Şifreniz</span>
                  <span className="subTitle_text text-xs font-light text-base-content-40">
                    Son değiştirme: Az Önce
                  </span>
                </div>
              </div>
              <div className="flex gap-x-1">
                <span className="me-2 text-sm font-medium mt-3 inline-block">
                  ********
                </span>
                <IconPen
                  className="mt-3 cursor-pointer text-primary"
                  onClick={() => setIsModalOpen("password")}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-x-2">
                <IconPasswordReload width={20} className="mt-1" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    Şifre Güncelleme Sıklığı
                  </span>
                  <span className="subTitle_text text-xs font-light text-base-content-40">
                    Şifrenizi belirli aralıklarla güncelleyin.
                  </span>
                </div>
              </div>
              <div className="flex gap-x-1">
                <NumberSelectInput
                  isBorderless
                  placeholder="Se..."
                  options={[
                    { value: 3, label: "3 Ay" },
                    { value: 6, label: "6 Ay" },
                    { value: 12, label: "12 Ay" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-actual-white rounded-2xl p-8">
          <p className="flex flex-col">
            <span className="font-bold">Başarısız Giriş Denemeleri</span>
            <span className="subTitle_text text-sm text-base-content-40 mt-2 font-light">
              Bilgilerinizin güncel olduğundan emin olun.
            </span>
          </p>
          <div className="flex flex-col gap-y-5 mt-8">
            <div className="border-b flex justify-between pb-5">
              <div className="flex gap-x-2">
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    Şifre Denemesi Hatası
                  </span>
                  <span className="subTitle_text text-xs font-light text-base-content-60">
                    17.04.2024 - 11:46:12
                  </span>
                </div>
              </div>
              <div className="flex gap-x-1 items-baseline">
                <span className="me-2 text-xs font-normal mt-3 text-base-content-60 inline-block">
                  Platform
                </span>
                <p
                  className="subTitle_text bg-error text-actual-white text-sm font-medium h-6
                px-2 py-0.5 rounded-lg"
                >
                  WEB Panel
                </p>
              </div>
            </div>
            <div className="border-b flex justify-between pb-5">
              <div className="flex gap-x-2">
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    Şifre Denemesi Hatası
                  </span>
                  <span className="subTitle_text text-xs font-light text-base-content-60">
                    17.04.2024 - 11:46:12
                  </span>
                </div>
              </div>
              <div className="flex gap-x-1 items-baseline">
                <span className="me-2 text-xs font-normal mt-3 text-base-content-60 inline-block">
                  Platform
                </span>
                <p
                  className="subTitle_text bg-error text-actual-white text-sm font-medium h-6
                px-2 py-0.5 rounded-lg"
                >
                  WEB Panel
                </p>
              </div>
            </div>
            <div className="border-b flex justify-between pb-5">
              <div className="flex gap-x-2">
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    Şifre Denemesi Hatası
                  </span>
                  <span className="subTitle_text text-xs font-light text-base-content-60">
                    17.04.2024 - 11:46:12
                  </span>
                </div>
              </div>
              <div className="flex gap-x-1 items-baseline">
                <span className="me-2 text-xs font-normal mt-3 text-base-content-60 inline-block">
                  Platform
                </span>
                <p
                  className="subTitle_text bg-error text-actual-white text-sm font-medium h-6
                px-2 py-0.5 rounded-lg"
                >
                  WEB Panel
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-x-2">
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    Şifre Denemesi Hatası
                  </span>
                  <span className="subTitle_text text-xs font-light text-base-content-60">
                    17.04.2024 - 11:46:12
                  </span>
                </div>
              </div>
              <div className="flex gap-x-1 items-baseline">
                <span className="me-2 text-xs font-normal mt-3 text-base-content-60 inline-block">
                  Platform
                </span>
                <p
                  className="subTitle_text bg-error text-actual-white text-sm font-medium h-6
                px-2 py-0.5 rounded-lg"
                >
                  WEB Panel
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end:: First row */}

        {/* begin:: Second row */}
        <div className="bg-actual-white rounded-2xl p-8 h-fit">
          <p className="flex flex-col">
            <span className="font-bold">İletişim İzinleri</span>
            <span className="subTitle_text text-sm text-base-content mt-2 font-normal">
              Bu ayarları <span className="text-primary font-medium">AÇIK</span>{" "}
              duruma getirerek{" "}
              <span className="text-success hover:text-green-400 duration-300 font-medium underline-offset-4 underline cursor-pointer">
                Ticari Tanıtım İleti İzni’ni
              </span>{" "}
              onaylamaktasınız.
            </span>
          </p>
          <div className="flex flex-col gap-y-5 mt-8">
            <div className="border-b flex justify-between pb-5">
              <div className="flex gap-x-2">
                <IconMessages width={20} />
                <span className="text-sm font-medium mt-1">SMS Mesajları</span>
              </div>

              <Toggle isChecked={true} />
            </div>
            <div className="border-b flex justify-between pb-5">
              <div className="flex gap-x-2">
                <IconEmail width={20} />
                <span className="text-sm font-medium mt-1">
                  E-Posta Bültenleri
                </span>
              </div>

              <Toggle isChecked={true} />
            </div>
            <div className="border-b flex justify-between pb-5">
              <div className="flex gap-x-2">
                <IconPhone width={20} />
                <span className="text-sm font-medium mt-1">
                  Telefon Çağrıları
                </span>
              </div>

              <Toggle isChecked={true} />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-x-2">
                <IconVoicemail width={22} />
                <span className="text-sm font-medium mt-1">
                  Sesli Yanıt Sistemi
                </span>
              </div>

              <Toggle isChecked={false} />
            </div>
          </div>
        </div>
        <div className="bg-actual-white rounded-2xl p-8 h-fit">
          <p className="flex flex-col">
            <span className="font-bold">Onayladığınız Sözleşmeler</span>
            <span className="subTitle_text text-sm text-base-content-40 mt-2 font-light">
              Bilgilerinizin güncel olduğundan emin olun.
            </span>
          </p>
          <div className="flex flex-col gap-y-5 mt-8">
            <div className="border-b flex justify-between pb-5">
              <div className="flex gap-x-2">
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    KVKK Aydınlatma Metni
                  </span>
                  <span className="subTitle_text text-xs font-light text-base-content-40">
                    V1.2 - 12.03.2024
                  </span>
                </div>
              </div>

              <IconArrowRight
                className="mt-3 cursor-pointer text-primary"
                onClick={() => {
                  setRule(1);
                  setIsModalOpen("terms");
                }}
              />
            </div>
            <div className="border-b flex justify-between pb-5">
              <div className="flex gap-x-2">
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Açık Rıza Metni</span>
                  <span className="subTitle_text text-xs font-light text-base-content-40">
                    V1.2 - 12.03.2024
                  </span>
                </div>
              </div>

              <IconArrowRight
                className="mt-3 cursor-pointer text-primary"
                onClick={() => {
                  setRule(2);
                  setIsModalOpen("terms");
                }}
              />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-x-2">
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    Trpos Kullanıcı Sözleşmesi
                  </span>
                  <span className="subTitle_text text-xs font-light text-base-content-40">
                    V1.2 - 12.03.2024
                  </span>
                </div>
              </div>

              <IconArrowRight
                className="mt-3 cursor-pointer text-primary"
                onClick={() => {
                  setRule(3);
                  setIsModalOpen("terms");
                }}
              />
            </div>
          </div>
        </div>
        {/* end:: Second row */}
      </div>
    </>
  );
};

export default Settings;
