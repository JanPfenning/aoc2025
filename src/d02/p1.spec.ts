import { readFileSync } from "fs";
import { findInvalidIdsInRanges, isInvalidId, parseRanges } from "./p1.js";
describe("day 2", () => {
    describe("p1", () => {
        describe("isInvalidId", () => {
            const invalidIds = ["11", "2222", "1212"];
            const validIds = ["101", "12", "222", "1234"];
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
            expect(result).toEqual(1227775554)
        })

        it("puzzle", () => {
            const rawInput = readFileSync("src/d02/inputs/puzzle_input.txt", "utf-8");
            const input = parseRanges(rawInput);
            const invalidIdRanges = findInvalidIdsInRanges(input)
            const result = invalidIdRanges.map(x => +x).reduce((a,b) => a + b, 0);
            expect(result).toEqual(53420042388)
        })
    })
})