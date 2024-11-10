import { TableColumn } from "react-data-table-component";

export type TableProps = {
  columns: TableColumn<any>[];
  data: any;
};
