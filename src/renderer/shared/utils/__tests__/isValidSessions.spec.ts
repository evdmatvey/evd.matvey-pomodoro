import { describe, it, expect } from 'vitest';
import { isValidSessions } from '../isValidSessions';

describe('IsValidSessions', () => {
  it('Should return true', () => {
    const result = isValidSessions(10);
    expect(result).toBe(true);
  });

  it('Should return false (0)', () => {
    const result = isValidSessions(0);
    expect(result).toBe(false);
  });

  it('Should return false (negative number)', () => {
    const result = isValidSessions(-10);
    expect(result).toBe(false);
  });

  it('Should return false (big number)', () => {
    const result = isValidSessions(100);
    expect(result).toBe(false);
  });

  it('Should return true (min valid)', () => {
    const result = isValidSessions(1);
    expect(result).toBe(true);
  });

  it('Should return true (max valid)', () => {
    const result = isValidSessions(10);
    expect(result).toBe(true);
  });
});
