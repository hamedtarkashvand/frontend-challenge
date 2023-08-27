import { FC, useEffect } from "react";
import imgUrl from "../assets/images/placeholder.jpg";

interface AvatarProps {
  src: string | null | undefined;
  size?: "large";
}
const Avatar: FC<AvatarProps> = ({ src, size }) => {
  useEffect(() => {}, [src]);
  return (
    <img
      className="rounded-full"
      height={size ? "50" : "30"}
      width={size ? "50" : "30"}
      alt="Avatar"
      loading="lazy"
      src={src || imgUrl}
    />
  );
};
export default Avatar;
