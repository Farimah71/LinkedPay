import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14.25 6.375L9 11.625L3.75 6.375"/>
    </BaseIcon>
  );
}