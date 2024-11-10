import React, { useState } from "react";
import { BadgeProps } from "../../../../../components/badge/badge.type";
import { TableColumn } from "react-data-table-component";
import { Badge } from "../../../../../components/badge";
import { Button } from "../../../../../components/button";
import { IconEyeComplete } from "../../../../../components/icons/icons";
import { Table } from "../../../../../components/table";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/redux-hooks";
import { setShowModal } from "../../../../../redux/reducers/show-modal";
import { getVposTransactionDetail } from "../../../../../redux/actions/reports/transaction";
import { BeatLoader } from "react-spinners";


const badgeText: Record<BadgeProps["badgeColor"], string> = {
    primary: "Onayladnı",
    success: "Aktif",
    error: "İade",
  };

export const TransactionReportGrid : React.FC = () => {
    const { loading }=useAppSelector(state => state.transactionReportSlice);

    const [transactionId , setTransactionId]=useState("");

    const dispatch=useAppDispatch();

    type DataType = {
        id: number;
        transactionName: string;
        transactionId:string,
        webSite: string;
        transactionDate: string;
        salesType: string;
        transactionAmount: string;
        badge: BadgeProps["badgeColor"];
      };
    
      const columns: TableColumn<DataType>[] = [
        {
          name: "Sıra",
          selector: (row) => row.id,
          grow: 1,
        },
        {
          name: "İşlem Adı",
          selector: (row) => row.transactionName,
          grow: 5,
          style: { color: "black", fontWeight: "500" },
        },
        {
          name: "Web Site",
          selector: (row) => row.webSite,
          grow: 2,
        },
        {
          name: "İşlem Tarihi",
          selector: (row) => row.transactionDate,
          grow: 2,
        },
        {
          name: "Satış Tipi",
          selector: (row) => row.salesType,
          grow: 2,
        },
        {
          name: "İşlem Tutarı",
          selector: (row) => row.transactionAmount,
          grow: 2,
          style: { color: "#22B789", fontWeight: "600" },
        },
        {
          name: "Durum",
          cell: (row) => (
            <Badge badgeColor={row.badge} text={badgeText[row.badge]} />
          ),
          grow: 4,
        },
        {
          name: "",
          cell: (row) => (
            <div className="flex flex-col gap-1 2xl:flex-row 2xl:gap-0 items-center">
              <Button
                isLink={true}
                className="hover:no-underline !font-semibold"
                onClick={async () => {
                    setTransactionId(row.transactionId);
                    await dispatch(getVposTransactionDetail({VPosTransactionId:row.transactionId}))
                    dispatch(setShowModal({isShow:true , type:"detail"}))
                }}
              >
                <IconEyeComplete
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="text-primary"
                />
                {
                    loading && row.transactionId===transactionId ? <BeatLoader size={7} color="#00636D" /> : "Detaylar"
                }
              </Button>
            </div>
          ),
          grow: 5,
        },
      ];
    
      const data: DataType[] = [
        {
          id: 1,
          transactionName: "Party chicken lot pizza ranch wing.",
          transactionId:"1",
          webSite: "arçelik.com",
          transactionDate: "12.09.2024",
          salesType: "Peşin",
          transactionAmount: "₺50.000.00",
          badge: "primary",
        },
        {
          id: 2,
          transactionName: "Party chicken lot pizza ranch wing.",
          transactionId:"2",
          webSite: "arçelik.com",
          transactionDate: "12.09.2024",
          salesType: "Peşin",
          transactionAmount: "₺50.000.00",
          badge: "error",
        },
      ];
    return (
        <Table data={data} columns={columns} />
    )
}