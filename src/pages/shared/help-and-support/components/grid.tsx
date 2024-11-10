import { Button } from "../../../../components/button";
import { IconEyeComplete, IconPlus } from "../../../../components/icons/icons";
import { useEffect, useState } from "react";
import { CreateSupportRequest } from "../modal/create";
import { Badge } from "../../../../components/badge";
import { BadgeProps } from "../../../../components/badge/badge.type";
import { TableColumn } from "react-data-table-component";
import { Table } from "../../../../components/table";
import { Link } from "react-router-dom";

const badgeText: Record<BadgeProps["badgeColor"], string> = {
  primary: "Onay Bekliyor",
  success: "Aktif",
  error: "Kapandı",
};

type DataType = {
  id: number;
  title: string;
  explanation: string;
  ticketNo: string;
  reqDate: string;
  taskId: number;
  badge: BadgeProps["badgeColor"];
};

export const GridSupport = ({ data }: { data: [] }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [tableData, setTableData] = useState<DataType[] | "">("");

  const columns: TableColumn<DataType>[] = [
    {
      name: "Sıra",
      selector: (row) => row.id,
      width: "70px",
    },
    {
      name: "Başlık",
      selector: (row) => row.title,
      grow: 2,
      style: { color: "black", fontWeight: "500" },
    },
    {
      name: "Açıklama",
      selector: (row) => row.explanation.substring(0, 50),
      grow: 3,
    },
    {
      name: "Ticket No",
      selector: (row) => row.ticketNo,
      grow: 2,
    },
    {
      name: "Talep Tarihi",
      selector: (row) => row.reqDate,
      grow: 2,
    },
    {
      name: "Durum",
      cell: (row) => (
        <Badge badgeColor={row.badge} text={badgeText[row.badge]} />
      ),
      grow: 2,
    },
    {
      name: "",
      cell: (row) => (
        <div className="flex flex-col gap-1 2xl:flex-row 2xl:gap-0 items-center">
          <Button isLink={true} className="hover:no-underline">
            <IconEyeComplete
              width={24}
              height={24}
              viewBox="0 0 24 24"
              className="text-primary"
            />
            <Link
              to={`ticketDetail/${row.taskId}`}
              state={{ token: localStorage.trpos__access_token }}
            >
              Görüntüle
            </Link>
          </Button>
        </div>
      ),
      grow: 4,
    },
  ];

  useEffect(() => {
    if (data.length) {
      const tableData: DataType[] = data.map((task: any, index: number) => {
        return {
          rowId: index + 1,
          id: task.id,
          title: "Arçelik Televizyon QHD",
          explanation: task.taskItems[0].description,
          ticketNo: task.referenceNo,
          reqDate: new Date(task.creationDate).toLocaleDateString(),
          taskId: task.id,
          badge: "primary",
        };
      });

      setTableData(tableData);
    }
  }, [data]);

  const closeModalHandler = () => {
    isOpenModal && setIsOpenModal(false);
  };

  return (
    <>
      <CreateSupportRequest
        state={isOpenModal}
        onCloseModal={closeModalHandler}
      />
      <div className="outlet w-full h-full mt-4 pb-8 pt-4 pe-8">
        <div className="w-full h-auto bg-actual-white rounded-2.5xl p-6">
          <div className="w-full h-full flex flex-col mb-10">
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
          </div>

          <Table columns={columns} data={tableData} />
        </div>
      </div>
    </>
  );
};
