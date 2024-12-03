import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { part1, part2 } from '../day03/day03.js';;

describe('Day 03', () => {
    it('part 1 - sample input', () => {
        const input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
        assert.equal(part1(input), 161);
    });

    it('part 2 - sample input', () => {
        const input = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;
        assert.equal(part2(input), 48);
    });
});