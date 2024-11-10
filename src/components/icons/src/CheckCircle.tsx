import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M24.5 14C24.5 8.20059 19.7994 3.5 14 3.5C8.20059 3.5 3.5 8.20059 3.5 14C3.5 19.7982 8.20059 24.5 14 24.5C19.7994 24.5 24.5 19.7982 24.5 14Z"/><path d="M9.95764 14.0003L12.6525 16.6939L18.0398 11.3066"/>
    </BaseIcon>
  );
}