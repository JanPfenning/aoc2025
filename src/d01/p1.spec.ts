import { readFileSync } from "fs";
import { solve, parseInput, solveP2, turnDialWithZeroesCrossingCount } from "./p1.js";

describe("day 1", () => {
    describe("turn dial", () => {

        const BASE_PATH = "src/d01/inputs/"

        describe("p1", () => {
            it("example", () => {
                const rawInput = readFileSync(BASE_PATH+"example_input.txt", "utf-8");
                const input = parseInput(rawInput);
                const result = solve(input);
                expect(result.filter(x => x === 0).length).toEqual(3);
            })


            it("puzzle", () => {
                const rawInput = readFileSync(BASE_PATH+"puzzle_input.txt", "utf-8");
                const input = parseInput(rawInput);
                const result = solve(input);
                const solution = result.filter(x => x === 0).length
                expect(solution).toEqual(989);
            })
        })
        
        describe("p2", () => {

            const cases: {
                inp: {current: number, distance: number, clockwise: boolean, size: number},
                expectedOutput: {newPos: number, zeroesCrossed: number}
            }[] = [
                {inp: {current: 2, distance: 3, clockwise: true, size: 10}, expectedOutput: {newPos: 5, zeroesCrossed: 0}},
                {inp: {current: 2, distance: 7, clockwise: true, size: 10}, expectedOutput: {newPos: 9, zeroesCrossed: 0}},
                {inp: {current: 2, distance: 8, clockwise: true, size: 10}, expectedOutput: {newPos: 0, zeroesCrossed: 1}},
                {inp: {current: 2, distance: 9, clockwise: true, size: 10}, expectedOutput: {newPos: 1, zeroesCrossed: 1}},
                {inp: {current: 2, distance: 19, clockwise: true, size: 10}, expectedOutput: {newPos: 1, zeroesCrossed: 2}},
                {inp: {current: 0, distance: 9, clockwise: true, size: 10}, expectedOutput: {newPos: 9, zeroesCrossed: 0}},
                
                {inp: {current: 2, distance: 2, clockwise: false, size: 10}, expectedOutput: {newPos: 0, zeroesCrossed: 1}},
                {inp: {current: 2, distance: 3, clockwise: false, size: 10}, expectedOutput: {newPos: 9, zeroesCrossed: 1}},
                {inp: {current: 2, distance: 11, clockwise: false, size: 10}, expectedOutput: {newPos: 1, zeroesCrossed: 1}},
                {inp: {current: 2, distance: 12, clockwise: false, size: 10}, expectedOutput: {newPos: 0, zeroesCrossed: 2}},
                {inp: {current: 0, distance: 9, clockwise: false, size: 10}, expectedOutput: {newPos: 1, zeroesCrossed: 0}},
                {inp: {current: 0, distance: 10, clockwise: false, size: 10}, expectedOutput: {newPos: 0, zeroesCrossed: 1}},
                {inp: {current: 2, distance: 1, clockwise: false, size: 10}, expectedOutput: {newPos: 1, zeroesCrossed: 0}},
            ];

            it.each(cases)("turnDialWithZeroesCrossingCount", ({inp, expectedOutput}) => {
                const result = turnDialWithZeroesCrossingCount(inp.current, inp.distance, inp.clockwise, inp.size)
                expect(result).toEqual(expectedOutput);
            })

            it("example", () => {
                const rawInput = readFileSync(BASE_PATH+"example_input.txt", "utf-8");
                const input = parseInput(rawInput);
                const result = solveP2(input);
                expect(result).toEqual(6);
            })

            it("puzzle", () => {
                const rawInput = readFileSync(BASE_PATH+"puzzle_input.txt", "utf-8");
                const input = parseInput(rawInput);
                const result = solveP2(input);
                expect(result).toEqual(5941);
            })

        })
        
    })
})