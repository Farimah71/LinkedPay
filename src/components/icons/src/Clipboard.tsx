import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3233 6.28561H9.67659C8.92742 6.28561 8.32031 5.67849 8.32031 4.92933V4.35627C8.32031 3.60711 8.92742 3 9.67659 3H14.3233C15.0725 3 15.6796 3.60711 15.6796 4.35627V4.92933C15.6796 5.67849 15.0725 6.28561 14.3233 6.28561Z"/><path d="M15.6803 4.59375C17.7536 4.59375 19.4348 6.27498 19.4348 8.34831V17.2458C19.4348 19.3191 17.7536 21.0004 15.6803 21.0004H8.32097C6.24764 21.0004 4.56641 19.3191 4.56641 17.2458V8.34831C4.56641 6.27498 6.24764 4.59375 8.32097 4.59375"/><path d="M11.4837 11H15.4707M8.52734 11H8.80852"/><path d="M11.4837 15.8203H15.4707M8.52734 15.8203H8.80852"/>
    </BaseIcon>
  );
}