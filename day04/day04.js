
let matrix = [];
let rows = 0;
let cols = 0;

function parseInput(input) {
    matrix = input.split('\n').map(row => row.split(''));
    rows = matrix.length;
    cols = matrix[0].length;
}

function isValid(x, y) {
    return x >= 0 && y >= 0 && x < rows && y < cols;
}


export function part1(input) {
    parseInput(input);
    
    const directions = [
        { dx: 0, dy: 1 },  // Horizontal right
        { dx: 1, dy: 0 },  // Vertical down
        { dx: 1, dy: 1 },  // Diagonal down-right
        { dx: 1, dy: -1 }, // Diagonal down-left
        { dx: 0, dy: -1 }, // Horizontal left
        { dx: -1, dy: 0 }, // Vertical up
        { dx: -1, dy: -1 },// Diagonal up-left
        { dx: -1, dy: 1 }  // Diagonal up-right
    ];
    const word = "XMAS";
    
    function search(x, y, dir) {
        for (let k = 0; k < word.length; k++) {
            const newX = x + k * dir.dx;
            const newY = y + k * dir.dy;
            if (!isValid(newX, newY) || matrix[newX][newY] !== word[k]) {
                return false;
            }
        }
        return true;
    }

    const results = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === word[0]) {
                for (const dir of directions) {
                    if (search(i, j, dir)) {
                        results.push({ start: [i, j], direction: dir });
                    }
                }
            }
        }
    }

    return results.length;
}

export function part2(input) {
    parseInput(input);

    function checkDiagonal(x, y, forward) {
        const offset = forward ? 2 : -2;
        const endX = x + offset;
        const endY = y - 2;
        
        if (!isValid(x, y)) return false;
        if (!isValid(endX, endY)) return false;

        if (matrix[x][y] === 'M') {
            return matrix[endX][endY] === 'S';
        }
        if (matrix[x][y] === 'S') {
            return matrix[endX][endY] === 'M';
        }
        return false;
    }

    function checkXPattern(x, y) {
        return checkDiagonal(x-1, y+1, true) && checkDiagonal(x+1, y+1, false);
    }

    let count = 0;

    for (let i = 1; i < rows - 1; i++) {
        for (let j = 1; j < cols - 1; j++) {
            if (matrix[i][j] === 'A') {
                if (checkXPattern(i, j)) { 
                    count++;
                }
            }
        }
    }

    return count;
}
