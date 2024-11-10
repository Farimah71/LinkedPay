import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M24.5 14.5C24.5 8.70059 19.7994 4 14 4C8.20059 4 3.5 8.70059 3.5 14.5C3.5 20.2982 8.20059 25 14 25C19.7994 25 24.5 20.2982 24.5 14.5Z"/><path d="M16.7191 11.7775L11.2796 17.2172M16.726 17.2245L11.2773 11.7759"/>
    </BaseIcon>
  );
}