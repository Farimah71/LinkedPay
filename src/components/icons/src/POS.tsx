import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="113" height="112"><rect x=".5" width="112" height="112"/></mask><g mask="url(#a)"><rect x=".5" width="112" height="112"/></g>
    </BaseIcon>
  );
}