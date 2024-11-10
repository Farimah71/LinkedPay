import { MenuItem } from "../../../types/menu-item.type";

export type MenuItemProps = MenuItem & {
  isActive?: boolean;
  isToggled?: boolean;
};
