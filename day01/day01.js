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
    const rows = input.split('\n'); 
    const counts = {};


    let sum = 0;

    for (const row of rows) {
        const [leftValue, rightValue] = row.split('  ').map(Number);

        counts[leftValue] = counts[leftValue] || [0, 0];
        counts[leftValue][0]++;
        
        counts[rightValue] = counts[rightValue] || [0, 0];
        counts[rightValue][1]++;
    }

    for (const [key, value] of Object.entries(counts)) {
        if(value[0] != 0) {
            sum += key * value[0] * value[1];
        }
    }
    
    return sum;
    
}