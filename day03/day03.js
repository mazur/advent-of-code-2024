function calculateMulSum(input) {
    const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
    let matches;
    let totalSum = 0;

    while ((matches = regex.exec(input)) !== null) {
        const x = parseInt(matches[1], 10);
        const y = parseInt(matches[2], 10);
        
        totalSum += x * y;
    }

    return totalSum;
}

export function part1(input) {
    return calculateMulSum(input);
}

export function part2(input) {
    const sections = input.split(/(do\(\)|don't\(\))/);
    
    let totalSum = 0;
    let isOn = true;

    for (const section of sections) {
        if (section == "do()") {
            isOn = true;
            continue;
        } else if (section == "don't()") {
            isOn = false;
            continue;
        }

        if (isOn) {
            totalSum += calculateMulSum(section);
        }
    }

    return totalSum;
}