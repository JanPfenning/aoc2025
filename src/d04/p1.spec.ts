import { readFileSync } from "fs";
import { parseInput, findReachable, findAllReachable } from "./p1.js";

describe("day 4", () => {
    const BASE_PATH = "src/d04/inputs/"

    describe("Part 1", () => {
        it("example", () => {
            const input = readFileSync(BASE_PATH + "example_input.txt", "utf-8");
            const grid = parseInput(input);
            const reachable = findReachable(grid);
            expect(reachable.length).toBe(13);
        })

        it("puzzle", () => {
            const input = readFileSync(BASE_PATH + "puzzle_input.txt", "utf-8");
            const grid = parseInput(input);
            const reachable = findReachable(grid);
            expect(reachable.length).toBe(1549);
        })
    })

    describe("Part 2", () => {
        it("example", () => {
            const input = readFileSync(BASE_PATH + "example_input.txt", "utf-8");
            const grid = parseInput(input);
            const reachable = findAllReachable(grid);
            expect(reachable.length).toBe(43);
        })
        it("puzzle", () => {
            const input = readFileSync(BASE_PATH + "puzzle_input.txt", "utf-8");
            const grid = parseInput(input);
            const reachable = findAllReachable(grid);
            expect(reachable.length).toBe(8887);
        })
    })

})