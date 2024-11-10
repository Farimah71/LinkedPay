import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="2.5" cy="2.5" r="2"/>
    </BaseIcon>
  );
}