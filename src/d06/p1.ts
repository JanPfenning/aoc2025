export const parseInput = (rawInput: string): number => {
    const lines = rawInput.replace(/ +/g, " ").split('\n').map(line => line.split(" ").filter(x => x)) ;
    const cols = lines[0]!.length;
    const transposed = Array.from(Array(cols).keys()).map(idx => lines.map(line => line[idx]));
    return transposed.map(x => {
        const op = x.at(-1)
        return op === "+" 
        ? x.slice(0,-1).reduce((acc, iter) => acc+(+iter!), 0)
        : x.slice(0,-1).reduce((acc, iter) => acc*(+iter!), 1)
    }).reduce((acc, iter) => acc+iter, 0)
}

export const parseInput2 = (rawInput: string): number => {
    const lines = rawInput.replace(/ /g, "_").split('\n');
    const transposed = Array.from(Array(lines[0]!.length).keys()).map(idx => lines.map(line => line[idx]!));
    const splitCols = transposed.map((x, idx) => x.every(e => e === "_") ? idx : -1).filter(e => e != -1)
    const groups = [0, ...splitCols, -1].map((_, idx, arr) => {
        if(idx === arr.length-1) return null;
        return transposed.slice(arr[idx], arr[idx+1] === -1 ? undefined : arr[idx+1]).filter(e => !e.every(ch => ch === "_"))
    })
    .filter(e => e !== null)
    const calculations = groups.map(group => {
        const op: string = group.map(line => line.at(-1) !== "_" ? line.at(-1) : false).find(e => e)! as string
        const newNumbers = group.map(line => line.slice(0,-1).filter(ch => ch !== "_").join("")).map(x => +x)
        return {op, numbers: newNumbers}
    })
    const results: number[] = calculations.map(({op, numbers}) => {
        return op === "+"
        ? numbers.reduce((acc, iter) => acc+(+iter!), 0)
        : numbers.reduce((acc, iter) => acc*(+iter!), 1)
    })
    return results.reduce((acc, iter) => acc+iter, 0)
}