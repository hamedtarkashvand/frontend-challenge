import React, { FC, useCallback, useContext, useMemo, useRef, useState } from "react";
import Avatar from "./Avatar";
import Badge from "./Badge";
import MenuItem from "./MenuItem";

import useClickOutside from "../hooks/useClickOutside";

import { IconType } from "react-icons";

import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineQuestion } from "react-icons/ai";
import { BsBoxArrowLeft } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { PiArrowLineUpBold } from "react-icons/pi";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

import { ThemeContext } from "../providers/themeProvider";
import { User } from "../types";

interface UserMenuProps {
  currentUser?: Partial<User>;
}

const UserMenu: FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isDark, switchTheme } = useContext(ThemeContext);
  const elRef = useRef<HTMLDivElement>(null);
    useClickOutside(elRef, () => setIsOpen(false));

  
  const toggleIsOpen = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();

      setIsOpen((value) => !value);
    },
    [],
  );


  const IconArrow: IconType = useCallback(
    (props) => {
      if (isOpen) {
        return <RiArrowDownSLine {...props} />;
      }
      return <RiArrowUpSLine {...props} />;
    },
    [isOpen],
  );

  const user = useMemo(() => {
    return {
      ...currentUser,
    };
  }, [currentUser]);

  return (
    <div className="relative">
      <div
        ref={elRef}
        className="
        dark:bg-zinc-950
        file: cursor-pointer 
         border-[1px]
        border-[#C5C5C5]
         w-[360px] 
         rounded-xl
         gap-3
         py-3
         px-4"
      >
        <div
          onClick={(e) => toggleIsOpen(e)}
          className="
            flex
            flex-row
            items-center
            justify-between"
        >
          <div
            className="
              flex
              flex-row
              items-center
              gap-3"
          >
            <div className="rounded-full border-[1px] dark:border-zinc-800">
              <Avatar src={user?.profile?.avatar} />
            </div>

            <span className="font-semibold text-lg text-black dark:text-white ">
              {user?.name}
            </span>
            <Badge color="primary" badgeContent="PRO" />
          </div>
          <IconArrow size={25} className="dark:text-gray-300" />
        </div>
        {isOpen && (
          <div
            className="
                    absolute
                    rounded-xl
                    w-full 
                    shadow-xl
                    bg-white
                    dark:bg-zinc-950
                    overflow-hidden
                    text-sm
                    top-20
                    right-0
                    gap-5
                    py-3
                    px-4
                  "
          >
            <div className=" flex items-center gap-3 mb-3">
              <Avatar size="large" src={user?.profile?.avatar} />
              <div className="flex flex-col">
                <div className="flex flex-row justify-start items-center  gap-2 ">
                  <span className="font-semibold text-lg dark:text-white">
                    {user?.name}
                  </span>
                  <Badge color="primary" badgeContent="PRO" />
                </div>
                <p className="text-sm text-gray-400 dark:bg-Zinc-950 font-md">
                  {user?.email}
                </p>
              </div>
            </div>
            <hr />
            <div
              className="
                       flex
                       flex-col
                       gap-2
                       mt-1 
                       
                      "
            >
              <MenuItem
                icon={LuSettings2}
                label="Profile Setting"
                onClick={() => {}}
              />

              <MenuItem
                icon={AiOutlineQuestion}
                label="Profile Setting"
                onClick={() => {}}
              />

              <MenuItem
                icon={isDark ? MdOutlineLightMode : MdOutlineNightlight}
                label="Dark Mood"
                onClick={() => switchTheme()}
              />

              <MenuItem
                icon={PiArrowLineUpBold}
                label="Upgrade Plan"
                onClick={() => {}}
              />
              <hr />
              <MenuItem
                icon={BsBoxArrowLeft}
                label="Upgrade Plan"
                onClick={() => {}}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default UserMenu;
