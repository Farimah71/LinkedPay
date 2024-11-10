import { TableColumn } from "react-data-table-component";
import { BadgeProps } from "../../../../../components/badge/badge.type";
import { Badge } from "../../../../../components/badge";
import { Button } from "../../../../../components/button";
import { IconEyeComplete } from "../../../../../components/icons/icons";
import { Table } from "../../../../../components/table";

const badgeText: Record<BadgeProps["badgeColor"], string> = {
    primary: "Ödenecek",
    success: "Ödendi",
    error: "Kapandı",
  };

export const ProgressPaymentGrid : React.FC = () => {
    type DataType = {
        id: number;
        businessName: string;
        transactionDate: string;
        valueDate: string;
        iban: string;
        grossAmount: string;
        netAmount: string;
        badge: BadgeProps["badgeColor"];
      };
    
    
      const columns: TableColumn<DataType>[] = [
        {
          name: "Sıra",
          selector: (row) => row.id,
          grow: 1,
        },
        {
          name: "İş Yeri Adı",
          selector: (row) => row.businessName,
          grow: 3,
        },
        {
          name: "İşlem Tarihi",
          selector: (row) => row.transactionDate,
          grow: 2,
        },
        {
          name: "Valör Tarihi",
          selector: (row) => row.valueDate,
          grow: 2,
        },
        {
          name: "IBAN",
          cell: (row) => <span>{row.iban}</span>,
          grow: 3,
        },
        {
          name: "Brüt Tutar",
          selector: (row) => row.grossAmount,
          grow: 2,
          style: { color: "#18181C", fontWeight: "600" },
        },
        {
          name: "Net Tutar",
          selector: (row) => row.netAmount,
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
          cell: () => (
            <div className="flex flex-col gap-1 2xl:flex-row 2xl:gap-0 items-center">
              <Button
                isLink={true}
                className="hover:no-underline !font-semibold"
              >
                <IconEyeComplete
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="text-primary"
                />
                İşlemleri Gör
              </Button>
            </div>
          ),
          grow: 5,
        },
      ];
    
      const data: DataType[] = [
        {
          id: 1,
          businessName: "Raven Soft",
          transactionDate: "29.06.2024",
          valueDate: "29.06.2024",
          iban: "TR90 0087 7896 6789 6363 0678 54",
          grossAmount: "₺50.000.00",
          netAmount: "₺50.000.00",
          badge: "primary",
        },
        {
          id: 2,
          businessName: "Raven Soft",
          transactionDate: "29.06.2024",
          valueDate: "29.06.2024",
          iban: "TR90 0087 7896 6789 6363 0678 54",
          grossAmount: "₺50.000.00",
          netAmount: "₺50.000.00",
          badge: "success",
        },
        {
          id: 3,
          businessName: "Raven Soft",
          transactionDate: "29.06.2024",
          valueDate: "29.06.2024",
          iban: "TR90 0087 7896 6789 6363 0678 54",
          grossAmount: "₺50.000.00",
          netAmount: "₺50.000.00",
          badge: "success",
        },
        {
          id: 4,
          businessName: "Raven Soft",
          transactionDate: "29.06.2024",
          valueDate: "29.06.2024",
          iban: "TR90 0087 7896 6789 6363 0678 54",
          grossAmount: "₺50.000.00",
          netAmount: "₺50.000.00",
          badge: "primary",
        },
      ];
    return (
        <Table data={data} columns={columns} />
    )
}