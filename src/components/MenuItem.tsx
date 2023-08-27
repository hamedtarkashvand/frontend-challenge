import type { FC } from "react";
import { IconType } from "react-icons";
interface MenuItemProps {
  onClick: () => void;
  label: string;
  icon?: IconType;
}

const MenuItem: FC<MenuItemProps> = ({ onClick, label, icon: Icon }) => {
  return (
    <div
      onClick={onClick}
      className="
            flex
            items-center
            gap-2
            text-black
             px-4
             py-3
             hover:bg-neutral-100
             transition
             rounded-md
             dark:text-white
             dark:hover:text-slate-800
             font-semibold
             text-md
             
            "
    >
      {Icon && <Icon size={20} />}
      {label}
    </div>
  );
};
export default MenuItem;
