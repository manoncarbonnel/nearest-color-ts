export const RED = "F00";
export const GREEN = "0F0";
export const BLUE = "00F";

type hexa = '0' | '1' |'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'A'|'B'|'C'|'D'|'E'|'F'
type color = `${hexa}${hexa}${hexa}`

function isRed(color: color): boolean {
  return color[0] === "F";
}

function isGreen(color: color): boolean {
  return color[1] === "F";
}

function isBlue(color: color): boolean {
  return color[2] === "F";
}

class NotAValidColorError extends Error {}

export const nearestColor = (baseColor: color): string => {
  if (isRed(baseColor)) return RED;
  if (isGreen(baseColor)) return GREEN;
  if (isBlue(baseColor)) return BLUE;
  throw new NotAValidColorError(`${baseColor} is not a valid color.`);
};
