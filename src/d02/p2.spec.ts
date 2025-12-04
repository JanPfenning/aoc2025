import { readFileSync } from "fs";
import { findInvalidIdsInRanges, isInvalidId } from "./p2.js";
import { parseRanges } from "./p1.js";
describe("day 2", () => {
    describe("p2", () => {
        describe("isInvalidId", () => {
            const invalidIds = ["1188511885", "1010", "111", "222222", "446446", "824824824", "2121212121", "11"];
            const validIds = ["12", "1234", "10510", "1", "10", "211011", "1222222"];
            it.each(invalidIds)("invalid id: %s", (id) => {
                expect(isInvalidId(id)).toBe(true);
            })
            it.each(validIds)("valid id: %s", (id) => {
                expect(isInvalidId(id)).toBe(false); 
            })
        })

        it("example", () => {
            const rawInput = readFileSync("src/d02/inputs/example_input.txt", "utf-8");
            const input = parseRanges(rawInput);
            const invalidIdRanges = findInvalidIdsInRanges(input)
            const result = invalidIdRanges.map(x => +x).reduce((a,b) => a + b, 0);
            expect(result).toEqual(4174379265)
        })

        it("puzzle", () => {
            const rawInput = readFileSync("src/d02/inputs/puzzle_input.txt", "utf-8");
            const input = parseRanges(rawInput);
            const invalidIdRanges = findInvalidIdsInRanges(input)
            const result = invalidIdRanges.map(x => +x).reduce((a,b) => a + b, 0);
            expect(result).toEqual(69553832684)
        })
    })
})