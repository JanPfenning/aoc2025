type Instruction = {clockwise: boolean, distance: number};

export const parseInput = (rawInput: string): Instruction[] => {
    return rawInput.split('\n').map(line => {
        const clockwise = line[0] === 'R' ? true : false;
        const distance = parseInt(line.slice(1));
        return { clockwise, distance };
    })
}

const turnDial = (current: number, distance: number, clockwise: boolean, size = 100): number => {
    const delta = clockwise ? distance : -distance;
    return (current + delta + size) % size;
}

export const solve = (instructions: Instruction[], start = 50): number[] => {
    return instructions.reduce((positions, instr) => {
        const lastPosition = positions[positions.length - 1]!;
        const newPosition = turnDial(lastPosition, instr.distance, instr.clockwise);
        positions.push(newPosition);
        return positions;
    }, [start]);
}

export const turnDialWithZeroesCrossingCount = (current: number, distance: number, clockwise: boolean, size = 100): {newPos: number, zeroesCrossed: number} => {
    const delta = clockwise ? distance : -distance;
    const newPos = ((current + delta) % size + size) % size;
    
    const isStartingAtZero = current === 0;
    const zeroesCrossed = clockwise
        ? Math.floor((current + distance) / size)
        : distance <= current
            ? 0
            : (isStartingAtZero ? 0 : 1) + Math.floor((distance - current) / size);
    
    return { newPos, zeroesCrossed };
}

export const solveP2 = (instructions: Instruction[], start = 50): number => {
    return instructions.reduce(({position, totalZeroes}, instr) => {
        const {newPos, zeroesCrossed} = turnDialWithZeroesCrossingCount(position, instr.distance, instr.clockwise);
        return { position: newPos, totalZeroes: totalZeroes + zeroesCrossed };
    }, {position: start, totalZeroes: 0}).totalZeroes;
}