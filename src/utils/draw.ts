// 確率を指定
const PROBABILITY = 1;

export const draw = () => {
  // 0から1未満のランダムな数を生成
  const rand = Math.random();

  if (rand < PROBABILITY) {
    return "hit";
  } else {
    return "lose";
  }
};
