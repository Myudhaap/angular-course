/*
* Looping
* */

const nums: number[] = [1,2,3,4,5];

// For
let sumFor = 0;
for(let index = 0; index < nums.length; index++) {
    sumFor += nums[index];
}

console.log("Sum for: " + sumFor)

// While
let sumWhile = 0;
let i = 0;
while(i < nums.length){
    sumWhile += nums[i];
    i++
}
console.log(`Sum while: ${sumWhile}`)

// Do While
let sumDoWhile: number = 0;
i = 0;
do{
    sumDoWhile += nums[i]
    i++
}while(i < nums.length)
console.log(`Sum do while: ${sumDoWhile}`)


// For..of
let sumForOf = 0;
for(const num of nums){
    sumForOf += num
}
console.log(`Sum for..of: ${sumForOf}`)

// For..in
let sumForIn = 0;
for(const index in nums){
    sumForIn += nums[index];
}
console.log(`Sum fo..in: ${sumForIn}`)

// Foreach
let sumForEach = 0;
nums.forEach(num => sumForEach += num)
console.log(`Sum foreach: ${sumForEach}`)

// Map
let sumMap = 0;
const numsNew = nums.map(num => {
    sumMap += num
    if(num % 2 == 0){
        return num
    }
    return null
}).filter(num => num !== null)
console.log(`map: ${numsNew}`)
console.log(`Sum map: ${sumMap}`)

// Reduce
const sumReduce = nums.reduce((prev, current) => prev + current, 0);
console.log("Sum reduce: " + sumReduce)