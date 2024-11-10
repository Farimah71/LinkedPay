import {
  IconClipboard,
  IconLink,
  IconUser,
  IconSetting,
  IconSupport,
  IconWebPage,
  IconBankCard,
} from "../components/icons/icons";
import { MenuItem } from "../types/menu-item.type";

export const menuItems1: {
  [key: string]: MenuItem[];
} = {
  "SANAL POS": [
    {
      title: "Web Site Yönetimi",
      href: "/dashboard/Institutional/webManagement",
      iconDeactive: <IconWebPage width={24} height={24} viewBox="0 0 24 24" />,
      iconActive: (
        <IconWebPage
          width={24}
          height={24}
          viewBox="0 0 24 24"
          className="text-black"
        />
      ),
    },
    {
      title: "Ödeme Linkleri",
      href: "/dashboard/Institutional/linkPayment",
      iconDeactive: <IconLink width={24} height={24} viewBox="0 0 24 24" />,
      iconActive: (
        <IconLink
          width={24}
          height={24}
          viewBox="0 0 24 24"
          className="text-black"
        />
      ),
    },
    {
      title: "Raporlarım",
      href: "",
      iconDeactive: (
        <IconClipboard width={24} height={24} viewBox="0 0 24 24" />
      ),
      iconActive: (
        <IconClipboard
          width={24}
          height={24}
          viewBox="0 0 24 24"
          className="text-black"
        />
      ),
      isParent: true,
      children:[
        {
          title:"İşlem Raporları",
          href:"/dashboard/Institutional/transactionReport"
        },
        {
          title:"Hakedişler",
          href:"/dashboard/Institutional/progressPayment"
        },
        {
          title:"Faturalar",
          href:"/dashboard/Institutional/bills"
        }
      ]
    },
    {
      title: "Kullanıcı Yetkilendirme",
      href: "/dashboard/Institutional/userAuthorization",
      iconDeactive: <IconUser width={24} height={24} viewBox="0 0 24 24" />,
      iconActive: (
        <IconUser
          width={24}
          height={24}
          viewBox="0 0 24 24"
          className="text-black"
        />
      ),
    },
  ],
  "FİZİKİ POS": [
    {
      title: "Fiziki POS",
      href: "/dashboard/Institutional/physicalPOS",
      iconDeactive: <IconBankCard width={24} height={24} viewBox="0 0 24 24" />,
      iconActive: (
        <IconBankCard
          width={24}
          height={24}
          viewBox="0 0 24 24"
          className="text-black"
        />
      ),
    },
  ],
  "Daha Fazlası": [
    {
      title: "Yardım ve Destek",
      href: "/dashboard/helpAndSupport",
      iconDeactive: <IconSupport width={24} height={24} viewBox="0 0 24 24" />,
      iconActive: (
        <IconSupport
          width={24}
          height={24}
          viewBox="0 0 24 24"
          className="text-black"
        />
      ),
    },
    {
      title: "Ayarlar",
      href: "/dashboard/settings",
      iconDeactive: <IconSetting width={24} height={24} viewBox="0 0 24 24" />,
      iconActive: (
        <IconSetting
          width={24}
          height={24}
          viewBox="0 0 24 24"
          className="text-black"
        />
      ),
    },
  ],
};

export const menuItems2: {
  [key: string]: MenuItem[];
} = {
  İŞLEMLER: [
    {
      title: "Ödeme Linkleri",
      href: "/dashboard/personal/linkPayment",
      iconDeactive: <IconLink width={24} height={24} viewBox="0 0 24 24" />,
      iconActive: (
        <IconLink
          width={24}
          height={24}
          viewBox="0 0 24 24"
          className="text-black"
        />
      ),
    },
    {
      title: "Raporlarım",
      href: "",
      iconDeactive: (
        <IconClipboard width={24} height={24} viewBox="0 0 24 24" />
      ),
      iconActive: (
        <IconClipboard
          width={24}
          height={24}
          viewBox="0 0 24 24"
          className="text-black"
        />
      ),
    },
  ],
  "Daha Fazlası": [
    {
      title: "Yardım ve Destek",
      href: "/dashboard/helpAndSupport",
      iconDeactive: <IconSupport width={24} height={24} viewBox="0 0 24 24" />,
      iconActive: (
        <IconSupport
          width={24}
          height={24}
          viewBox="0 0 24 24"
          className="text-black"
        />
      ),
    },
    {
      title: "Ayarlar",
      href: "/dashboard/settings",
      iconDeactive: <IconSetting width={24} height={24} viewBox="0 0 24 24" />,
      iconActive: (
        <IconSetting
          width={24}
          height={24}
          viewBox="0 0 24 24"
          className="text-black"
        />
      ),
    },
  ],
};

export const menuItems3: {
  [key: string]: MenuItem[];
} = {
  "Daha Fazlası": [
    {
      title: "Yardım ve Destek",
      href: "/dashboard/helpAndSupport",
      iconDeactive: <IconSupport width={24} height={24} viewBox="0 0 24 24" />,
      iconActive: (
        <IconSupport
          width={24}
          height={24}
          viewBox="0 0 24 24"
          className="text-black"
        />
      ),
    },
    {
      title: "Ayarlar",
      href: "/dashboard/settings",
      iconDeactive: <IconSetting width={24} height={24} viewBox="0 0 24 24" />,
      iconActive: (
        <IconSetting
          width={24}
          height={24}
          viewBox="0 0 24 24"
          className="text-black"
        />
      ),
    },
  ],
};
