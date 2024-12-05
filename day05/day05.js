function parseInput(input) {
    const [rulesStr, updatesStr] = input.split('\n\n');

    const updates = updatesStr.split('\n').map(row => row.split(',').map(Number));    
    const rules =  rulesStr.split('\n').map(rule => rule.split('|').map(Number));

    return { rules, updates };
}


export function part1(input) {
    const { rules, updates } = parseInput(input);

    function isCorrectOrder(update) {
        const pagePositions = new Map();
        update.forEach((page, index) => pagePositions.set(page, index));

        for (const [before, after] of rules) {
            if (pagePositions.has(before) && pagePositions.has(after)) {
                if (pagePositions.get(before) > pagePositions.get(after)) {
                    return false;
                }
            }
        }
        return true;
    }

    let sumOfMiddlePages = 0;
    updates.forEach(update => {
        if (isCorrectOrder(update)) {
            const middleIndex = Math.floor(update.length / 2);
            sumOfMiddlePages += update[middleIndex];
        }
    });

    return sumOfMiddlePages;
}

export function part2(input) {
    return 0;
}