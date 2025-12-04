type Grid = boolean[][]
export const parseInput = (input: string): Grid => {
    return input.split('\n').map(line => [...line.trim()].map(x => x === '@'));
}

export const findReachable = (grid: Grid, radius = 1, surroundedByLessThan = 4): [number, number][] => {
    const reachable: [number, number][] = [];
    const options = grid.flatMap((row, rIdx) => {
        return row.map((cell, cIdx) => {
            return { cell, rIdx, cIdx }
        })
    }).filter(({ cell }) => cell);
    return options.filter(option => {
        let count = 0;
        for(let dr = -radius; dr <= radius; dr++) {
            for(let dc = -radius; dc <= radius; dc++) {
                if(dr === 0 && dc === 0) continue;
                if(isTrue(grid, option.rIdx + dr, option.cIdx + dc)) {
                    count++;
                }
            }
        }
        return count < surroundedByLessThan;
    }).map(x => [x.rIdx, x.cIdx]);
}

export const isTrue = (grid: Grid, r: number, c: number): boolean => {
    if(r < 0 || c < 0 || r >= grid.length || c >= grid[0]!.length) return false;
    return grid[r]![c]!;
}

export const findAllReachable = (grid: Grid, radius = 1, surroundedByLessThan = 4): [number, number][] => {
    let allReachables: [number, number][] = []
    let curGrid = structuredClone(grid);
    let lastGridReachable = 0
    let curGridReachable = curGrid.flat().reduce((iter, cur) => cur ? iter+1 : iter, 0)
    while(lastGridReachable !== curGridReachable) {
        const reachable = findReachable(curGrid, radius, surroundedByLessThan);
        allReachables = allReachables.concat(reachable);
        reachable.forEach(([r,c]) => {
            curGrid[r]![c] = false;
        })
        lastGridReachable = curGridReachable
        curGridReachable = curGrid.flat().reduce((iter, cur) => cur ? iter+1 : iter, 0)
    }
    return allReachables
}