import { test } from 'node:test';
import assert from 'node:assert/strict';
import { part1, part2 } from '../day01/day01.js';
import { readInput } from '../utils/readInput.js';

test('Day 01', (t) => {
    t.test('part 1 - sample input', () => {
        const input = readInput(1, true);
        assert.equal(part1(input), 'expected_result');
    });

    /*
    t.test('part 2 - sample input', () => {
        const input = readInput(1, true);
        assert.equal(part2(input), 'expected_result');
    });
    */
});