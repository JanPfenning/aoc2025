import { readFileSync } from "fs";
import { findHighest12InRow, findHighestInRow, parseInput } from "./p1.js";

describe("day 3", () => {
    const BASE_PATH = "src/d03/inputs/"

    describe("Part 1", () => {
        describe("highest number of string", () => {
            const cases: {input: string, expectedOutput: number}[] = [
                {input: "98199", expectedOutput: 99},
                {input: "8119", expectedOutput: 89},
                {input: "2371", expectedOutput: 71},
                {input: "8941", expectedOutput: 94},
            ];
            it.each(cases)("highest number in string: $input", ({input, expectedOutput}) => {
                expect(findHighestInRow([...input].map(x => +x))).toEqual(expectedOutput);
            })
        })
        it("example", () => {
            const rawInput = readFileSync(BASE_PATH+"example_input.txt", "utf-8");
            const input = parseInput(rawInput);
            const result = input.map(row => findHighestInRow(row)).reduce((a, b) => a + b, 0);
            expect(result).toEqual(357)
        })

        it("puzzle", () => {
            const rawInput = readFileSync(BASE_PATH+"puzzle_input.txt", "utf-8");
            const input = parseInput(rawInput);
            const result = input.map(row => findHighestInRow(row)).reduce((a, b) => a + b, 0);
            expect(result).toEqual(17430)
        })
    })

    describe("Part 2", () => {

        describe("highest 12-digit number in string", () => {
            const cases: {input: string, expectedOutput: number}[] = [
                {input: "9876543211111111", expectedOutput: 987654321111},
                {input: "9876543211111111911", expectedOutput: 987654321911},
                {input: "9876111543211191", expectedOutput: 987654321191},
                {input: "9811176543211919", expectedOutput: 987654321919},
           ]
           it.each(cases)("highest 12-digit number in string: $input", ({input, expectedOutput}) => {
                expect(findHighest12InRow([...input].map(x => +x))).toEqual(expectedOutput);
           })
        })

        it("example", () => {
            const rawInput = readFileSync(BASE_PATH+"example_input.txt", "utf-8");
            const input = parseInput(rawInput);
            const result = input.map(row => findHighest12InRow(row)).reduce((a, b) => a + b, 0);
            expect(result).toEqual(3121910778619)
        })

        it("puzzle", () => {
            const rawInput = readFileSync(BASE_PATH+"puzzle_input.txt", "utf-8");
            const input = parseInput(rawInput);
            const result = input.map(row => findHighest12InRow(row)).reduce((a, b) => a + b, 0);
            expect(result).toEqual(171975854269367)
        })
    })
})
        