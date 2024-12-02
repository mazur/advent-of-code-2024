function parseInput(input){
    const lines = input.split('\n');
    const numbers = lines.map((line) => line.split(' ').map(Number));

    return numbers;
}

function checkSequence(row) {
    let prevDiff = 0;

    for (let i = 0; i < row.length; i++) {
        
        const diff = row[i] - row[i+1];
        
        if (Math.abs(diff) > 3 || diff === 0) {
            return false;
        }

        if (i > 0 && (Math.sign(diff) * Math.sign(prevDiff)) < 0) {
            return false;
        }

        prevDiff = diff;
    }   

    return true;
}

export function isValid(row, fix = false){
    if (!fix) {
        return checkSequence(row);
    }
    
    for (let i = 0; i < row.length; i++) {
        const newRow = [...row.slice(0, i), ...row.slice(i + 1)];
        if (checkSequence(newRow)) {
            return true;
        }
    }

    return false;
}

export function part1(input) {
    const reports = parseInput(input);

    let count = 0;
    
    for (const row of reports) {
        if (isValid(row)) {
            count++;
        }
    }
    
    return count;
}

export function part2(input) {
    const reports = parseInput(input);
    
    let count = 0;
    for (const row of reports) {
        if (isValid(row, true)) {
            count++;
        }
    }
    
    return count;
}

/* figure this out later later */
/* 
if (process.env.NODE_ENV === 'test') {
    module.exports.isValid = isValid;
}
    */