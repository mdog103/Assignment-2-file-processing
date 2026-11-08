const fs = require("fs")
function calculateSum(numbers){ let sum =0; 
for( const number of numbers){ sum+=number}
return sum;
}
console.log(calculateSum([6,12,18,]))

 function findMinimum(numbers){let minimum = numbers[0]
    for(const number of numbers)
        {if (number < minimum){minimum = number }
 } return minimum;}
    console.log(findMinimum([6,12,18]))

    function FindMaximum(numbers){let maximum = numbers[0]
        for(const number of numbers)
        {if(number > maximum){maximum = number}
        }return maximum;
    }
    console.log(FindMaximum([6,12,18]))
 
    function CalculateAverage(numbers){ 
         return calculateSum(numbers)/numbers.length
    }
    console.log(CalculateAverage([6,12,18]))
    const Samplenumbers = fs.readFileSync("./data/sample-numbers.txt","utf8")
    const numbers = Samplenumbers.split("\n")
    .map(Number)
    console.log(calculateSum(numbers))
    console.log(findMinimum(numbers))
    console.log(FindMaximum(numbers))
    console.log(CalculateAverage(numbers))
    module.exports = {calculateSum,findMinimum,FindMaximum,CalculateAverage}

