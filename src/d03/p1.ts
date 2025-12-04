export const parseInput = (input: string): number[][] => {
    return input.split('\n').map(line => [...line.trim()].map(x => +x));
}

export const findHighestInRow = (row: number[]): number => {
    let maxTens = 0
    let maxOnes = 0
    for(let i = 0; i <= row.length - 2; i++) {
        if(row[i]! > maxTens) {
            maxTens = row[i]!
            maxOnes = row[i+1]!
            continue
        };
        if(row[i]! > maxOnes) {
            maxOnes = row[i]!
        }
    }
    if(row[row.length - 1]! > maxOnes) {
        maxOnes = row[row.length - 1]!
    }
    return +(""+maxTens+maxOnes);
}

export const findHighest12InRow = (row: number[]): number => {
    const maxDigits = new Array(12).fill(0);
    

    for(let i = 0; i <= row.length - 12; i++) {
        // Check each position from left to right
        for(let pos = 0; pos < 12; pos++) {
            const currentDigit = row[i + pos]!;
            if(currentDigit > maxDigits[pos]!) {
                // Update this position and all following positions
                for(let j = pos; j < 12; j++) {
                    maxDigits[j] = row[i + j]!;
                }
                break;
            }
        }
    }
    
    return parseInt(maxDigits.join(''));
}