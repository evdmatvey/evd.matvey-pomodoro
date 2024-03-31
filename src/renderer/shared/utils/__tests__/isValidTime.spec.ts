import { describe, it, expect } from 'vitest';
import { isValidTime } from '../isValidTime';

describe('IsValidTime', () => {
  it('Should return true', () => {
    const result = isValidTime(10);
    expect(result).toBe(true);
  });

  it('Should return false (0)', () => {
    const result = isValidTime(0);
    expect(result).toBe(false);
  });

  it('Should return false (negative number)', () => {
    const result = isValidTime(-10);
    expect(result).toBe(false);
  });

  it('Should return false (big number)', () => {
    const result = isValidTime(100);
    expect(result).toBe(false);
  });

  it('Should return true (min valid)', () => {
    const result = isValidTime(1);
    expect(result).toBe(true);
  });

  it('Should return true (max valid)', () => {
    const result = isValidTime(60);
    expect(result).toBe(true);
  });
});
