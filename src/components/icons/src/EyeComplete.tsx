import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M11.998 20.0712C15.703 20.0712 19.092 17.4072 21 12.9682C19.092 8.52923 15.703 5.86523 11.998 5.86523C8.297 5.86523 4.908 8.52923 3 12.9682C4.908 17.4092 8.297 20.0712 12.002 20.0712H11.998Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0788 12.9735C15.0788 14.6715 13.7008 16.0495 12.0028 16.0495C10.3038 16.0495 8.92578 14.6715 8.92578 12.9735C8.92578 11.2745 10.3038 9.89648 12.0028 9.89648C13.7008 9.89648 15.0788 11.2745 15.0788 12.9735Z"/>
    </BaseIcon>
  );
}