import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6.375 4.25L11.625 9.5L6.375 14.75" stroke-opacity=".4"/>
    </BaseIcon>
  );
}