import type { FC } from "react";

interface BadgeProps {
  color?: "primary" | "secondary";
  badgeContent: string;
}

const Badge: FC<BadgeProps> = ({ color = "primary", badgeContent }) => {
  return (
    <span
      className={`
            flex      
            items-center
            h-[21px]
            rounded-md
            font-bold
            text-[10px]
            p-1
            px-1
            ${color === "secondary" ? "bg-red-400" : "bg-sky-200"}
            ${color === "secondary" ? "text-red-800" : "text-sky-700"}
            ${
              color === "secondary"
                ? "dark:text-rose-700"
                : "dark:text-purple-500"
            }
            ${
              color === "secondary"
                ? "dark:bg-rose-700/20"
                : "dark:bg-purple-500/20"
            }
          `}
    >
      {badgeContent}
    </span>
  );
};

export default Badge;
