export const parseInput = (input: string): {ranges: [number, number][], ids: number[]} => {
    const [rawRanges, rawIds]: [string, string] = input.split('\n\n') as [string, string]
    const ranges = rawRanges.trim().split('\n').map(line => {
        const [start, end] = line.split('-').map(x => +x);
        return [start, end] as [number, number];
    });
    const ids = rawIds.trim().split('\n').map(x => +x);
    ranges.sort((a,b) => a[0]! - b[0]!);   
    return {ranges, ids};
}

export const isIdValid = (id: number, ranges: [number, number][]): boolean => {
    return ranges.some(([start, end]) => (id >= start && id <= end))
}

export const getValidIds = (ids: number[], ranges: [number, number][]): number[] => {
    return ids.filter(id => isIdValid(id, ranges));
}

export const mergeRanges = (ranges: [number, number][]): [number, number][] => {
    // x - y and z - w where x<z<y<w shoudl result in x - w
    // x - y and z - w where z<x<y<w should result in z - w
    // x - y and z - w where x<z<w<y should result in x - y
    // x - y and z - w where x<y<z<w should result in x - y and z - w
    // ...
    const mergedRanges: [number, number][] = [];
    for(const range of ranges) {
        const lastRange = mergedRanges[mergedRanges.length - 1];
        if(!lastRange || range[0]! > lastRange[1]!) {
            mergedRanges.push(range);
        } else {
            lastRange[1] = Math.max(lastRange[1]!, range[1]!);
        }
    }
    return mergedRanges;
}

export const getNumberOfAllValidIds = (ranges: [number, number][]): number => {
    const mergedRanges = mergeRanges(ranges);
    return mergedRanges.reduce((cur, [from, to]) => cur+(to+1-from), 0)
}