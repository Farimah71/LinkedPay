import DataTable from "react-data-table-component";
import { TableProps } from "./table.types";

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  const customStyles = {
    headCells: {
      style: {
        color: "#00636D",
        fontSize: "16px",
        fontFamily: "inter",
      },
    },
    cells: {
      style: {
        minHeight: "80px",
        width: "fit-content",
        color: "#18181C99",
        fontFamily: "inter",
      },
    },
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      customStyles={customStyles}
      responsive={true}
      noDataComponent="Görüntülenecek kayıt yok"
    />
  );
};
