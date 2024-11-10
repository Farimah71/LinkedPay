import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4.66699 16.4907C8.40033 8.40103 19.6003 8.40103 23.3337 16.4907"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.004 20.8427C12.52 20.8427 11.3066 19.6352 11.3066 18.1442C11.3066 16.6543 12.52 15.4456 14.004 15.4456C15.4891 15.4456 16.7025 16.6543 16.7025 18.1442C16.7025 19.6352 15.4891 20.8427 14.004 20.8427Z"/>
    </BaseIcon>
  );
}