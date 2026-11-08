  
const {calculateSum,findMinimum,FindMaximum,CalculateAverage,} = require("../src/numberProcessor.js")
test("Calculate sum add numbers correctly",()=>{
    expect(calculateSum([3+5])).toBe(8);
});
test("Find minimum finds the minimum of the number",()=>{
    expect(findMinimum([4,6,5])).toBe(4);
});
test("Find maximum finds the maximum of the number",()=>{
    expect(FindMaximum([4,8,9])).toBe(9);
});
test("CalculateAverage calculates the average of a certian amount of numbers divided by the total",()=>{
    expect(CalculateAverage([3,6,9])).toBe(6)
});