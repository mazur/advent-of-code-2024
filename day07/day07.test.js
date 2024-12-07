import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { part1, part2 } from '../day07/day07.js';

describe('Day 07', () => {
    it('part 1 - sample input', () => {
        const input = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`;
        assert.equal(part1(input), 3749);
    });

    it('part 2 - sample input', () => {
        const input = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`;
        assert.equal(part2(input), 11387);
    });
});