import { readFileSync } from "fs"
import { getNumberOfAllValidIds, getValidIds, parseInput } from "./p1.js"


describe("day 5", () => {
    const BASE_PATH = "src/d05/inputs/"
    describe("Part 1", () => {
        it("example", () => {
            const rawInput = readFileSync(BASE_PATH + "example_input.txt", "utf-8");
            const {ranges, ids} = parseInput(rawInput);
            const validIds = getValidIds(ids, ranges);
            expect(validIds.length).toBe(3);
        })
        it("puzzle", () => {
            const rawInput = readFileSync(BASE_PATH + "puzzle_input.txt", "utf-8");
            const {ranges, ids} = parseInput(rawInput);
            const validIds = getValidIds(ids, ranges);
            expect(validIds.length).toBe(811);
        })
    })
    describe("Part 2", () => {
        it("example", () => {
            const rawInput = readFileSync(BASE_PATH + "example_input.txt", "utf-8");
            const {ranges} = parseInput(rawInput);
            const validIds = getNumberOfAllValidIds(ranges);
            expect(validIds).toBe(14);
        })
        it("puzzle", () => {
            const rawInput = readFileSync(BASE_PATH + "puzzle_input.txt", "utf-8");
            const {ranges} = parseInput(rawInput);
            const validIds = getNumberOfAllValidIds(ranges);
            expect(validIds).toBe(338189277144473);
        })
    })
})