import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12.0007C4 13.7556 5.42275 15.1792 7.17848 15.1792C8.93335 15.1792 10.3561 13.7556 10.3561 12.0007C10.3561 10.2459 8.93335 8.82227 7.17848 8.82227C5.42275 8.82227 4 10.2459 4 12.0007Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.6445 12.0007C13.6445 13.7556 15.0673 15.1792 16.823 15.1792C18.5779 15.1792 20.0006 13.7556 20.0006 12.0007C20.0006 10.2459 18.5779 8.82227 16.823 8.82227C15.0673 8.82227 13.6445 10.2459 13.6445 12.0007Z"/><path d="M16.8216 15.1797H7.17773"/>
    </BaseIcon>
  );
}