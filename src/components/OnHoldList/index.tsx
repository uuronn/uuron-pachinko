import { OnHold } from "@/types";
import styles from "./index.module.css";

type Props = {
  onHoldList: OnHold[];
};

export const OnHoldList = ({ onHoldList }: Props) => {
  return (
    <ul className={styles.list}>
      {onHoldList.map((onHold, i) => {
        const currentColor =
          onHold.color === "white"
            ? styles.sphereWhite
            : onHold.color === "blue"
            ? styles.sphereBule
            : onHold.color === "green"
            ? styles.sphereGreen
            : onHold.color === "red"
            ? styles.sphereRed
            : styles.sphereGold;

        return <li className={currentColor} key={i} />;
      })}
    </ul>
  );
};
