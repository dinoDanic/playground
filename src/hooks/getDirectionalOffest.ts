export const getDirectionOffset = (
  w: boolean,
  s: boolean,
  d: boolean,
  a: boolean
) => {
  let directionOffset = 0; // w

  if (w) {
    // plm
  } else if (s) {
    directionOffset = Math.PI; // s
  } else if (a) {
    directionOffset = Math.PI / 2; // a
  } else if (d) {
    directionOffset = -Math.PI / 2; // d
  }
  return directionOffset;
};
