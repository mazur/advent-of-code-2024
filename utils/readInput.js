import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export function readInput(dayNumber, isSample = false) {
    const currentDir = dirname(fileURLToPath(import.meta.url));
    const fileName = isSample ? 'sample.txt' : 'input.txt';
    const path = join(currentDir, '..', `day${String(dayNumber).padStart(2, '0')}`, fileName);
    return readFileSync(path, 'utf-8').trim();
}