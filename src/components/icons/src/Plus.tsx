import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C16.9709 3 21 7.02908 21 12C21 16.9699 16.9709 21 12 21C7.02908 21 3 16.9699 3 12C3 7.02908 7.02908 3 12 3Z"/><path d="M15.2989 12.002H8.69922"/><path d="M12 8.7041V15.2969"/>
    </BaseIcon>
  );
}