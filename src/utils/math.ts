type Coordinate2D = {
  x: number;
  y: number;
};

type Fade = {
  in: {
    interval: [1550, 1790];
    type: string;
    value: 0;
  };
  out: {
    interval: [2700, 2960];
    type: string;
    value: 1;
  };
};

function fadeInOut(scrollY: number, fade: Fade) {
  if (scrollY >= fade.in.interval[0] && scrollY <= fade.in.interval[1]) {
    // fade in
  } else if (scrollY >= fade.out.interval[0] && scrollY <= fade.out.interval[1]) {
    // fade out
  }
}

/**
 * y = ax + b
 */
function linearEquation(progress: number, c1: Coordinate2D, c2: Coordinate2D) {
  let y = ((c2.y - c1.y) / (c2.x - c1.x)) * (progress - c1.x) + c1.y;

  // const minMax = [c1.y, c2.y];
  // if (c1.y > c2.y) minMax.reverse();

  // if (y < minMax[0]) {
  //   y = minMax[0];
  // } else if (y > minMax[1]) {
  //   y = minMax[1];
  // }
  return y;
}

function linearIncrease(progress: number, c1: Coordinate2D, c2: Coordinate2D) {
  const y = ((c2.y - c1.y) / (c2.x - c1.x)) * (progress - c1.x) + c1.y;
  return Math.min(c2.y, y);
}

function linearDecrease(progress: number, c1: Coordinate2D, c2: Coordinate2D) {
  let y = ((c2.y - c1.y) / (c2.x - c1.x)) * (progress - c1.x) + c1.y;
  return Math.max(c2.y, y);
}

export { linearEquation, linearIncrease, linearDecrease };
