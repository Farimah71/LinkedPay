import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M19.8311 13.4622L6.31746 20.8701C5.09248 21.5418 3.65345 20.4396 3.9755 19.0767L5.63832 12.0427L3.9755 5.00676C3.65345 3.64389 5.09248 2.54266 6.31746 3.21433L19.8311 10.6222C20.95 11.2363 20.95 12.8481 19.8311 13.4622Z"/><path d="M14.0094 12.0195L5.67578 12.0635"/>
    </BaseIcon>
  );
}