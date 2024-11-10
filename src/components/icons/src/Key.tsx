import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4.95375 5.73695C7.55875 3.13195 11.7818 3.13195 14.3868 5.73695C16.3108 7.66095 16.8098 10.468 15.8898 12.855L20.2088 17.172C21.2638 18.227 21.2638 19.937 20.2088 20.992C19.1548 22.047 17.4437 22.047 16.3887 20.992L12.0718 16.673C9.68476 17.593 6.87775 17.094 4.95375 15.17C2.34875 12.565 2.34875 8.34095 4.95375 5.73695Z"/><path d="M17.4378 14.4004L16.4258 15.4124M19.2818 16.2454L18.2698 17.2574"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2332 10.4745C11.2332 9.57955 10.5072 8.85352 9.61319 8.85352C8.71719 8.85352 7.99219 9.57955 7.99219 10.4745C7.99219 11.3705 8.71719 12.0955 9.61319 12.0955C10.5072 12.0955 11.2332 11.3705 11.2332 10.4745Z"/>
    </BaseIcon>
  );
}