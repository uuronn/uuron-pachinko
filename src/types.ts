export type Ball = Color | "lose";

export type Color = "white" | "blue" | "green" | "red" | "gold";

export type Video = {
  path: string;
  time: number;
  className: string;
  color: Color;
  result: "win" | "lose";
};

export type OnHold = {
  path: string;
  color: Color;
  time: number;
  result: "win" | "lose";
};
