import { InstallmentRowProps } from "./installment-row.types";

export const InstallmentRow: React.FC<InstallmentRowProps> = ({
  title,
  data,
  className,
  isLast = false,
}: InstallmentRowProps) => {
  return (
    <div
      className={`w-full grid grid-cols-2 text-sm ${
        !isLast && "border-b"
      } py-4 ${className}`}
    >
      <p className="text-dark-green">{title}</p>
      <p className="text-base-content">{data}</p>
    </div>
  );
};
