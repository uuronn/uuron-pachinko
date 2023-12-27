import Image from "next/image";
import styles from "./index.module.css";
import { ComponentPropsWithoutRef } from "react";

type Props = {
  isStart?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Handle = ({ isStart, ...props }: Props) => {
  return (
    <button className={isStart ? styles.on : styles.off} {...props}>
      <Image src="/handle.png" width={280} height={200} alt="パチンコのハンドルの画像" />
    </button>
  );
};
