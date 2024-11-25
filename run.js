import { performance } from 'node:perf_hooks';
import { readInput } from './utils/readInput.js';

async function runDay(dayNumber) {
    try {
        const dayString = String(dayNumber).padStart(2, '0');
        const { part1, part2 } = await import(`./day${dayString}/day${dayString}.js`);
        const input = readInput(dayNumber);

        console.log(`\n🎄 Day ${dayNumber}`);
        
        const start1 = performance.now();
        const result1 = part1(input);
        const end1 = performance.now();
        console.log(`Part 1: ${result1} (${(end1 - start1).toFixed(2)}ms)`);

        const start2 = performance.now();
        const result2 = part2(input);
        const end2 = performance.now();
        console.log(`Part 2: ${result2} (${(end2 - start2).toFixed(2)}ms)`);
    } catch (e) {
        console.error(`Day ${dayNumber} not implemented yet`);
    }
}

const day = process.argv[2];
if (day) {
    runDay(parseInt(day));
} else {
    // Run all implemented days
    for (let i = 1; i <= 24; i++) {
        await runDay(i);
    }
}