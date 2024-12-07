export function part1(input) {
    const lines = input.trim().split('\n');
    const validResults = [];

    for (const line of lines) {
        const [target, numbersStr] = line.split(':');
        const targetNumber = parseInt(target.trim(), 10);
        const numbers = numbersStr.trim().split(' ').map(Number);

        if (findValidCombination(numbers, targetNumber)) {
            validResults.push(targetNumber);
        }
    }

    return validResults.reduce((sum, num) => sum + num, 0);
}

function findValidCombination(numbers, target) {
    const operators = ['+', '*'];
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

export function part2(input) {
    return 0;
}