let rules = [];
let updates = [];

function parseInput(input) {
    const [rulesStr, updatesStr] = input.split('\n\n');

    updates = updatesStr.split('\n').map(row => row.split(',').map(Number));    
    rules = rulesStr.split('\n').map(rule => rule.split('|').map(Number));
}

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

function getSumOfMiddlePages(updates) {
    return updates.reduce((sum, update) => {
        const middleIndex = Math.floor(update.length / 2);
        return sum + update[middleIndex];
    }, 0);
}

export function part1(input) {
    parseInput(input);

    const correctUpdates = [];
    updates.forEach(update => {
        if (isCorrectOrder(update)) {
            correctUpdates.push(update);
        }
    });

    return getSumOfMiddlePages(correctUpdates);
}

function orderUpdateCorrectly(update) {
    const updateList = [...update];
    let swapped;

    do {
        swapped = false;
        for (const rule of rules) {

            const indexBefore = updateList.indexOf(rule[0]);
            const indexAfter = updateList.indexOf(rule[1]);

            if (indexBefore !== -1 && indexAfter !== -1 && indexBefore > indexAfter) {

                [updateList[indexBefore], updateList[indexAfter]] = [updateList[indexAfter], updateList[indexBefore]];
                swapped = true;
            }
        }
    } while (swapped);

    return updateList;
}

export function part2(input) {
    parseInput(input);
    
    const correctUpdates = [];

    updates.forEach(update => {
        if (!isCorrectOrder(update)) {
            correctUpdates.push(orderUpdateCorrectly(update));
        }
    });
    
    return getSumOfMiddlePages(correctUpdates);
}