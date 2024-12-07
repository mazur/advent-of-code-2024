export function part1(input) {
    return processInput(input, findValidCombination);
}

export function part2(input) {
    return processInput(input, findValidCombinationWithConcat);
}

function processInput(input, combinationFunction) {
    const lines = input.trim().split('\n');
    const validResults = [];

    for (const line of lines) {
        const [target, numbersStr] = line.split(':');
        const targetNumber = parseInt(target.trim(), 10);
        const numbers = numbersStr.trim().split(' ').map(Number);

        if (combinationFunction(numbers, targetNumber)) {
            validResults.push(targetNumber);
        }
    }

    return validResults.reduce((sum, num) => sum + num, 0);
}

function findValidCombination(numbers, target) {
    return findCombination(numbers, target, ['+', '*']);
}

function findValidCombinationWithConcat(numbers, target) {
    return findCombination(numbers, target, ['+', '*', '|']);
}

function findCombination(numbers, target, operators) {
    const n = numbers.length;

    function evaluateLeftToRight(expression) {
        let result = expression[0];

        for (let i = 1; i < expression.length; i += 2) {
            const operator = expression[i];
            const number = expression[i + 1];

            if (operator === '+') {
                result += number;
            } else if (operator === '*') {
                result *= number;
            } else if (operator === '|') {
                result = parseInt('' + result + number, 10);
            }
        }

        return result;
    }

    function backtrack(index, expression) {
        if (index === n) {
            return evaluateLeftToRight(expression) === target;
        }

        for (const operator of operators) {
            const newExpression = [...expression, operator, numbers[index]];
            if (backtrack(index + 1, newExpression)) {
                return true;
            }
        }

        return false;
    }

    return backtrack(1, [numbers[0]]);
}