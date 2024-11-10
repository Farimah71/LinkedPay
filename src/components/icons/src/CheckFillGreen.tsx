import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="6.5" cy="6.5" r="6"/><path d="M8.83317 4.89551L5.62484 8.10384L4.1665 6.64551"/>
    </BaseIcon>
  );
}