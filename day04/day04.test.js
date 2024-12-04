import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { part1, part2 } from '../day04/day04.js';

describe('Day 04', () => {
    it('part 1 - sample input', () => {
        const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;
        assert.equal(part1(input), 18);
    });

    it('part 2 - sample input', () => {
        const input = `.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........`;
        assert.equal(part2(input), 9);
    });
});