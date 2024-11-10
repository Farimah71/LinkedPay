import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <rect width="20" height="20" rx="10"/><path d="M13.5 7.59375L8.6875 12.4062L6.5 10.2188"/>
    </BaseIcon>
  );
}