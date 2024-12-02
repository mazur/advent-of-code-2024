export function part1(input) {
    const rows = input.split('\n'); 
    const left = [];
    const right = [];

    let sum = 0;
    
    for (const row of rows) {
        const [leftValue, rightValue] = row.split('  ').map(Number);
        left.push(leftValue);
        right.push(rightValue);
    }

    left.sort((a, b) => a - b);
    right.sort((a, b) => a - b);

    for (let i = 0; i < left.length; i++) {
        sum += Math.abs(left[i] - right[i]);
    }

    return sum;
}

export function part2(input) {
    return 0;
}