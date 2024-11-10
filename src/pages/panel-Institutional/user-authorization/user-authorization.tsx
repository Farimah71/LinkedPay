import { Badge } from "../../../components/badge/badge";
import { BadgeProps } from "../../../components/badge/badge.type";
import { Button } from "../../../components/button";
import {
  IconArrowRight,
  IconPen,
  IconPlus,
} from "../../../components/icons/icons";
import { TableColumn } from "react-data-table-component";
import { Table } from "../../../components/table";
import { CreateUserAuthentication } from "./modal/create";
import { useState } from "react";
import { EditUserAuthentication } from "./modal/edit";

const badgeText: Record<BadgeProps["badgeColor"], string> = {
  primary: "Admin",
  success: "Operasyon",
  error: "",
};

type ModalTypes = "create" | "edit" | "";

const UserAuthorization = () => {
  const [isOpenModal, setIsOpenModal] = useState<ModalTypes>("");

  type DataType = {
    id: number;
    name: string;
    phone: string;
    mail: string;
    badge: BadgeProps["badgeColor"];
  };

  const columns: TableColumn<DataType>[] = [
    {
      name: "Sıra",
      selector: (row) => row.id,
      grow: 1,
    },
    {
      name: "Personel Adı",
      selector: (row) => row.name,
      grow: 3,
      style: { color: "black", fontWeight: "500" },
    },
    {
      name: "Telefon Numarası",
      selector: (row) => row.phone,
      grow: 2,
    },
    {
      name: "Mail Adresi",
      selector: (row) => row.mail,
      grow: 2,
    },
    {
      name: "Görev",
      cell: (row) => (
        <Badge badgeColor={row.badge} text={badgeText[row.badge]} />
      ),
      grow: 3,
    },
    {
      name: "",
      cell: () => (
        <div className="flex flex-col gap-1 2xl:flex-row 2xl:gap-0 items-center">
          <Button
            isLink={true}
            className="hover:no-underline !text-orange"
            onClick={() => setIsOpenModal("edit")}
          >
            <IconPen
              width={24}
              height={24}
              viewBox="0 0 24 24"
              className="text-orange"
            />
            Düzenle
          </Button>
        </div>
      ),
      grow: 5,
    },
  ];

  const data: DataType[] = [
    {
      id: 1,
      name: "Ergin Altun",
      phone: "+90 000 000 00 00",
      mail: "ergin@raven.com.tr",
      badge: "primary",
    },
    {
      id: 2,
      name: "Beyazıt Bestami Çoban",
      phone: "+90 552 895 67 07",
      mail: "bestam.coban@raven.com.tr",
      badge: "success",
    },
    {
      id: 3,
      name: "Seda Gül Uçar",
      phone: "+90 555 555 55 55",
      mail: "sadegul.ucar@raven.com.tr",
      badge: "success",
    },
  ];

  const closeModalHandler = () => {
    setIsOpenModal("");
  };

  return (
    <>
      <CreateUserAuthentication
        state={isOpenModal == "create"}
        onCloseModal={closeModalHandler}
      />
      <EditUserAuthentication
        state={isOpenModal == "edit"}
        onCloseModal={closeModalHandler}
      />
      <div className="container w-full flex items-center gap-6 text-sm text-base-content-40 p-4">
        <p>Trpos</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p className="text-primary font-medium">Kullanıcı Yönetimi</p>
      </div>
      <div className="outlet w-full h-full container p-4 pb-8">
        <div className="w-full h-full bg-actual-white rounded-2.5xl p-6">
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex justify-between items-center">
              <div>
                <h1 className="text-[20px] text-base-content font-semibold">
                  Kullanıcılar
                </h1>
                <p className="subTitle_text text-xs text-base-content-40 mt-2">
                  Lorem, ipsum.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Button
                  variant="primary"
                  className="text-sm !rounded-2xl"
                  onClick={() => setIsOpenModal("create")}
                  isInTop
                >
                  <IconPlus width={24} hanging={24} viewBox="0 0 24 24" />
                  Yeni Kullanıcı Ekle
                </Button>
              </div>
            </div>
            <div className="w-full flex-grow mt-6">
              <Table columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAuthorization;
