import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <rect x=".5" y=".5" width="19" height="19" rx="9.5" stroke-opacity=".1"/><path d="M13.5 7.59375L8.6875 12.4062L6.5 10.2188"/>
    </BaseIcon>
  );
}