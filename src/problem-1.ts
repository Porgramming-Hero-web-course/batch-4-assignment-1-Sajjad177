const sumArray = ((arr : number[]) => {
    return arr.reduce((num1, num2) => num1 + num2)
})

console.log(sumArray([1, 2, 3, 4, 5]));