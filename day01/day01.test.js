import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { part1, part2 } from '../day01/day01.js';

describe('Day 01', () => {
    it('part 1 - sample input', () => {
        const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
        assert.equal(part1(input), 11);
    });

    it('part 2 - sample input', () => {
        const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
        assert.equal(part2(input), 31);
    });
});