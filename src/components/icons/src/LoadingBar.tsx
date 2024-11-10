import BaseIcon from "../base-icon";
import { SvgIconProps } from "../icon.types";

export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <circle r="10" cy="50" cx="84"><animate begin="0s" keySplines="0 0.5 0.5 1" values="10;0" keyTimes="0;1" calcMode="spline" dur="0.5555555555555556s" repeatCount="indefinite" attributeName="r"/><animate begin="0s" values="#00636d;#00636d;#00636d;#00636d;#00636d" keyTimes="0;0.25;0.5;0.75;1" calcMode="discrete" dur="2.2222222222222223s" repeatCount="indefinite" attributeName="fill"/></circle><circle r="10" cy="50" cx="16"><animate begin="0s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.2222222222222223s" repeatCount="indefinite" attributeName="r"/><animate begin="0s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.2222222222222223s" repeatCount="indefinite" attributeName="cx"/></circle><circle r="10" cy="50" cx="50"><animate begin="-0.5555555555555556s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.2222222222222223s" repeatCount="indefinite" attributeName="r"/><animate begin="-0.5555555555555556s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.2222222222222223s" repeatCount="indefinite" attributeName="cx"/></circle><circle r="10" cy="50" cx="84"><animate begin="-1.1111111111111112s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.2222222222222223s" repeatCount="indefinite" attributeName="r"/><animate begin="-1.1111111111111112s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.2222222222222223s" repeatCount="indefinite" attributeName="cx"/></circle><circle r="10" cy="50" cx="16"><animate begin="-1.6666666666666665s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.2222222222222223s" repeatCount="indefinite" attributeName="r"/><animate begin="-1.6666666666666665s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2.2222222222222223s" repeatCount="indefinite" attributeName="cx"/></circle>
    </BaseIcon>
  );
}