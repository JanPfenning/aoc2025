import { readFileSync } from "fs"
import { parseInput, parseInput2 } from "./p1.js";

describe("day06", () => {
    const BASE_PATH = "src/d06/inputs/"
    describe("part 1", () => {
        it("example", () => {
            const rawInput = readFileSync(BASE_PATH + "example_input.txt", "utf-8");
            const input = parseInput(rawInput)
            expect(input).toEqual(4277556)
        })
        it("puzzle", () => {
            const rawInput = readFileSync(BASE_PATH + "puzzle_input.txt", "utf-8");
            const input = parseInput(rawInput)
            expect(input).toEqual(3525371263915)
        })
    })
    describe("part 2", () => {
        it("example", () => {
            const rawInput = readFileSync(BASE_PATH + "example_input.txt", "utf-8");
            const input = parseInput2(rawInput)
            expect(input).toEqual(3263827)
        })
        it("puzzle", () => {
            const rawInput = readFileSync(BASE_PATH + "puzzle_input.txt", "utf-8");
            const input = parseInput2(rawInput)
            expect(input).toEqual(6846480843636)
        })
    })
})