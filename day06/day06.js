const directions = ['^', '>', 'v', '<'];
const moves = {
    '^': { dx: 0, dy: -1 },
    '>': { dx: 1, dy: 0 },
    'v': { dx: 0, dy: 1 },
    '<': { dx: -1, dy: 0 }
};


function parseInput(input) {
    return input.split('\n').map(line => line.split(''));
}

function findGuardPositionAndDirection(grid) {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (directions.includes(grid[y][x])) {
                return { position: { x, y }, direction: grid[y][x] };
            }
        }
    }
    return { position: null, direction: null };
}

function moveGuard(grid, guardPosition, guardDirection) {
    const visited = new Map();
    visited.set(`${guardPosition.x},${guardPosition.y}`, guardPosition);

    while (true) {
        const { dx, dy } = moves[guardDirection];
        const nextPosition = { x: guardPosition.x + dx, y: guardPosition.y + dy };

        if (
            nextPosition.y < 0 || nextPosition.y >= grid.length ||
            nextPosition.x < 0 || nextPosition.x >= grid[0].length
        ) {
            break;
        }

        if (grid[nextPosition.y][nextPosition.x] === '#') {
            guardDirection = directions[(directions.indexOf(guardDirection) + 1) % 4];
        } else {
            guardPosition = nextPosition;
            visited.set(`${guardPosition.x},${guardPosition.y}`, guardPosition);
        }
    }

    return Array.from(visited.values());
}

export function part1(input) {
    const grid = parseInput(input);
    const { position: guardPosition, direction: guardDirection } = findGuardPositionAndDirection(grid);
    const visited = moveGuard(grid, guardPosition, guardDirection);

    return visited.length;
}

export function part2(input) {
    const grid = parseInput(input);

    const { position: guardPosition, direction: guardDirection } = findGuardPositionAndDirection(grid);
    const visited = moveGuard(grid, guardPosition, guardDirection);

    const loopCausingPositions = new Set();

    for (const position of visited) {
        if (grid[position.y][position.x] === '.' && !(position.x === guardPosition.x && position.y === guardPosition.y)) {
            grid[position.y][position.x] = '#';

            const visited = new Set();
            let currentPosition = { ...guardPosition };
            let currentDirection = guardDirection;
            let isLoop = false;

            while (true) {
                const { dx, dy } = moves[currentDirection];
                const nextPosition = { x: currentPosition.x + dx, y: currentPosition.y + dy };

                if (
                    nextPosition.y < 0 || nextPosition.y >= grid.length ||
                    nextPosition.x < 0 || nextPosition.x >= grid[0].length
                ) {
                    break;
                }

                const nextKey = `${nextPosition.x},${nextPosition.y},${currentDirection}`;

                if (visited.has(nextKey)) {
                    isLoop = true;
                    break;
                }

                visited.add(nextKey);

                if (grid[nextPosition.y][nextPosition.x] === '#') {
                    currentDirection = directions[(directions.indexOf(currentDirection) + 1) % 4];
                } else {
                    currentPosition = nextPosition;
                }
            }

            if (isLoop) {
                loopCausingPositions.add(`${position.x},${position.y}`);
            }

            grid[position.y][position.x] = '.';
        }
    }

    return loopCausingPositions.size;
} 