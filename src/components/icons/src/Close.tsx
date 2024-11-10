import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 6L18 18"/><path d="M18 6L6 18"/>
    </BaseIcon>
  );
}