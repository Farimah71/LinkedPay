import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M17.2893 7.92969H17.8546C19.7938 7.92969 20.9993 9.2948 20.9993 11.2349V16.4706C20.9993 18.4011 19.7938 19.7759 17.8546 19.7759H9.85953C7.91938 19.7759 6.70508 18.4011 6.70508 16.4706V16.0659" stroke-opacity=".4"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1437 4.21875H6.14764C4.21332 4.21875 3 5.58873 3 7.52693V12.7577C3 14.696 4.20749 16.0659 6.14764 16.0659H14.1427C16.0839 16.0659 17.2913 14.696 17.2913 12.7577V7.52693C17.2913 5.58873 16.0839 4.21875 14.1437 4.21875Z" stroke-opacity=".4"/><path d="M3 8.42383H17.2913" stroke-opacity=".4"/>
    </BaseIcon>
  );
}