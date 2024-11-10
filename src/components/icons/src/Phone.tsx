import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2899 13.2136C15.0688 16.9916 16.1923 12.3542 18.5985 14.7584C20.9187 17.0776 22.2519 17.5424 19.3136 20.4807C18.9447 20.7764 16.6057 24.3368 8.38524 16.1183C0.164742 7.89977 3.72116 5.55784 4.01686 5.18994C6.96307 2.24374 7.41998 3.58481 9.74016 5.903C12.1454 8.30922 7.51097 9.43568 11.2899 13.2136Z"/>
    </BaseIcon>
  );
}