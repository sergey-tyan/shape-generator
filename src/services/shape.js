const getRandom = () => Number(Math.random() * 100 + 1).toFixed(2);

export const createRandomShape = () => ({
  topLeft1: getRandom(),
  topRight1: getRandom(),
  bottomRight1: getRandom(),
  bottomLeft1: getRandom()
});
