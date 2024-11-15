import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8.60149 3H17.0362C19.9843 3 21.8184 5.08119 21.8184 8.02638V15.9736C21.8184 18.9188 19.9843 21 17.0352 21H8.60149C5.65339 21 3.81836 18.9188 3.81836 15.9736V8.02638C3.81836 5.08119 5.66214 3 8.60149 3Z"/><path d="M7.16288 6.5498H7.10742M9.64852 6.5498H9.59306M12.1351 6.5498H12.0797"/><path d="M9.23047 16.9019L11.5315 13.9119L14.1557 15.9727L16.4071 13.0664"/><path d="M21.8184 9.49121H3.81836"/>
    </BaseIcon>
  );
}