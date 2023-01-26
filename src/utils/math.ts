type Coordinate2D = {
  x: number;
  y: number;
};

/**
 * y = ax + b
 */
function linearEquation(progress: number, c1: Coordinate2D, c2: Coordinate2D) {
  const y = ((c2.y - c1.y) / (c2.x - c1.x)) * (progress - c1.x) + c1.y;
  return y;
}

/**
 * y= ax^2 + b
 */
function quadraticEquation(progress: number, c1: Coordinate2D, c2: Coordinate2D) {
  const y = ((c2.y - c1.y) / (c2.x - c1.x)) * (Math.pow(progress, 2) - c1.x) + c1.y;
  return y;
}

const timingFunc = {
  linearEquation,
  quadraticEquation,
};

export { timingFunc, linearEquation, quadraticEquation };
