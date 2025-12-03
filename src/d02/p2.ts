export const isInvalidId = (id: string) => {
    for(let patternSize = 1; patternSize * 2 <= id.length; patternSize++) {
        const pattern = id.slice(0, patternSize);
        if(id === pattern.repeat(id.length / patternSize)) return true
    }
    return false
}

export const findInvalidIdsInRanges = (ranges: [number, number][]): string[] => ranges.flatMap(([start, end]) => Array.from({length: end - start + 1}, (_, i) => start + i).filter(x => isInvalidId(""+x))).map(x => ""+x)