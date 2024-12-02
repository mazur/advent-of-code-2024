import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { part1, isValid } from '../day02/day02.js';

describe('Day 02', () => {
    it('part 1 - sample input', () => {
        const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
        assert.equal(part1(input), 2);
    });

    it('should return true for valid decreasing sequences', () => {
        assert.equal(isValid([7, 6, 4, 2, 1]), true);
    });

    it('should return true for valid increasing sequences', () => {
        assert.equal(isValid([1, 3, 6, 7, 9]), true);
    });

    it('should return false when difference is greater than 3', () => {
        assert.equal(isValid([1, 5, 7, 8, 9]), false);
    });

    it('should return false when direction changes', () => {
        assert.equal(isValid([1, 3, 2, 4, 5]), false);
    });

    it('should return false when numbers are equal', () => {
        assert.equal(isValid([8, 6, 4, 4, 1]), false);
    });

    it('should return true when sequence can be fixed by removing one number (3)', () => {
        assert.equal(isValid([1, 3, 2, 4, 5], true), true);
    });

    it('should return true when sequence can be fixed by removing a duplicate (4)', () => {
        assert.equal(isValid([8, 6, 4, 4, 1], true), true);
    });

    it('should return false when sequence cannot be fixed by removing one number', () => {
        assert.equal(isValid([1, 2, 7, 8, 9], true), false);
    });
});