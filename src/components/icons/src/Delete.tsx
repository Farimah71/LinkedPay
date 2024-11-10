import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M16.3885 9.09375L15.8786 16.0743C15.7732 17.5183 14.5708 18.6371 13.122 18.6371H8.12783C6.67984 18.6371 5.47669 17.5182 5.37129 16.0735L4.86133 9.09375"/><path d="M17.5119 6.47314H3.7373"/><path d="M13.7678 6.47256L13.3487 4.40921C13.2271 3.95438 12.8144 3.63819 12.3442 3.63819H8.90983C8.43717 3.63657 8.02288 3.95276 7.90045 4.40921L7.48535 6.47256"/><path d="M9.04297 10.9556V14.7126M11.86 10.9556V14.7126"/>
    </BaseIcon>
  );
}