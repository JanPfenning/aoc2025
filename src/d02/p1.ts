export const parseRanges = (rawInput: string): [number, number][] => {
    return rawInput.split(',').map(tuple => {
        const [startStr, endStr] = tuple.split('-');
        return [parseInt(startStr!), parseInt(endStr!)];
    });
}

export const isInvalidId = (id: string) => {
    if(id.length % 2 === 1) return false;
    const firstHalfMatchesSecondHalf = id.slice(0, id.length / 2) === id.slice(id.length / 2);
    return firstHalfMatchesSecondHalf
}

export const findInvalidIdsInRanges = (ranges: [number, number][]): string[] => ranges.flatMap(([start, end]) => Array.from({length: end - start + 1}, (_, i) => start + i).filter(x => isInvalidId(""+x))).map(x => ""+x)