const {countWords,findLongestWord,countlines,} = require("../src/textAnalyzer");

test("countwords counts words correctly",()=>{
    expect(countWords("Javascript is challenging")).toBe(3);
});
test("FindLongestWord finds the longest word",()=>{
    expect(findLongestWord("Javascript is challenging")).toBe("challenging");

});
test("countlines counts how many lines",()=>{
    expect(countlines("Javascript is challenging")).toBe(1);
});
