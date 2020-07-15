export const createUid = () => {
  return Array.from(Array(24))
    .map(() => {
      return Math.random()
        .toString()
        .substr(-1);
    })
    .join('');
};

interface IntercentRange {
  start: number;
  end: number;
}

export const intersect = (one: IntercentRange, other: IntercentRange) => {
  if (one.start >= other.end || other.start >= one.end) {
    return { start: 0, end: 0 };
  }
  const start = Math.max(one.start, other.start);
  const end = Math.min(one.end, other.end);
  if (end - start <= 0) {
    return { start: 0, end: 0 };
  }
  return { start, end };
};

export const isIntersect = (one: IntercentRange, other: IntercentRange) => {
  const sect = intersect(one, other);
  return sect.start !== 0 || sect.end !== 0;
};
