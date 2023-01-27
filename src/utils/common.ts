function isBetween(scrollY: number, start: number, end: number) {
  return scrollY >= start && scrollY <= end;
}

function returnScale(value: number) {
  return `scale(${value})`;
}

function returnSelf(value: number) {
  return value;
}

function returnTranslateY(value: number) {
  return `translateY(${value}px)`;
}

export { isBetween, returnScale, returnSelf, returnTranslateY };
