import { Video } from "@/types";

// 確率を指定
const PROBABILITY = 0.1;

export const getRandomColor = (): Video => {
  const rand = Math.random();

  if (rand < PROBABILITY) {
    const rand = Math.random() * 100;

    return { time: 20, color: "white", path: "", className: "", result: "lose" };
  } else {
    return "lose";
  }
};
