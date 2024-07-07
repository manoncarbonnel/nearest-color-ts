import { describe, expect, test } from 'vitest';
import { nearestColor } from '../src/index';
  
// Specs
// 00 means 0 in decimal and FF means 255 in decimal.

describe('Nearest color', () => {
// Part 1: nearest color
// The idea is to use a set of colors (F00, 0F0, 00F)
// and guess the nearest color from the set.

const RED = "F00";
const GREEN = "0F0";
const BLUE = "00F";

  test('Reds', () => {
    expect(nearestColor("F42")).equal(RED);
    expect(nearestColor("F45")).equal(RED);
  });

  test('Greens', () => {
    expect(nearestColor("010")).equal(GREEN)
    expect(nearestColor("4F2")).equal(GREEN);
    expect(nearestColor("5F2")).equal(GREEN);
  });

  test('Blues', () => {
    expect(nearestColor("42F")).equal(BLUE);
    expect(nearestColor("43F")).equal(BLUE);
  });

  test('Exceptions', () => {
    expect(() => nearestColor("")).toThrowError(" is not a valid color.");
    expect(() => nearestColor("1234")).toThrowError("1234 is not a valid color.");
    expect(() => nearestColor("H45")).toThrowError("H45 is not a valid color.");
  });
});
