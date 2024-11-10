import { Switch } from "antd";
import { ToggleProps } from "./toggle.types";

export const Toggle: React.FC<ToggleProps> = ({ isChecked }) => {
  return <Switch defaultChecked={isChecked} />;
};
