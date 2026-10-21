import { describe, it, expect } from 'vitest';

export function add(a, b) {
  return a + b;
}

describe('add', () => {
  it('additionne deux nombres', () => {
    expect(add(2, 3)).toBe(5);
  });
});