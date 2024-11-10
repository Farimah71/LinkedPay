import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M17.5 10C17.5 5.85757 14.1424 2.5 10 2.5C5.85757 2.5 2.5 5.85757 2.5 10C2.5 14.1416 5.85757 17.5 10 17.5C14.1424 17.5 17.5 14.1416 17.5 10Z"/><path d="M7.11328 10.0002L9.03815 11.9242L12.8862 8.07617"/>
    </BaseIcon>
  );
}