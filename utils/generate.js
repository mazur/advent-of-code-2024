import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = dirname(fileURLToPath(import.meta.url));
const rootDir = join(currentDir, '..');

const templates = {
    index: `export function part1(input) {
    return input;
}

export function part2(input) {
    return input;
}`,

    test: (paddedDay) => `import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { part1, part2 } from '../day${paddedDay}/day${paddedDay}.js';

describe('Day ${paddedDay}', () => {
    it('part 1 - sample input', () => {
        const input = '';
        assert.equal(part1(input), 'expected_result');
    });

    /*
    it('part 2 - sample input', () => {
        const input = '';
        assert.equal(part2(input), 'expected_result');
    });
    */
});`
};

function generateDay(day) {
    const paddedDay = String(day).padStart(2, '0');
    const srcDayDir = join(rootDir, `day${paddedDay}`);

    // Check if day already exists
    if (existsSync(srcDayDir)) {
        console.error(`Day ${paddedDay} already exists!`);
        process.exit(1);
    }

    // Create directories
    mkdirSync(srcDayDir, { recursive: true });

    // Create files
    writeFileSync(join(srcDayDir, `day${paddedDay}.js`), templates.index);
    writeFileSync(join(srcDayDir, `day${paddedDay}.test.js`), templates.test(paddedDay));
    writeFileSync(join(srcDayDir, 'input.txt'), '');

    console.log(`✨ Generated files for day ${paddedDay}`);
}

const day = parseInt(process.argv[2]);
if (!day || isNaN(day) || day < 1 || day > 25) {
    console.error('Please provide a valid day number (1-25)');
    process.exit(1);
}

generateDay(day);