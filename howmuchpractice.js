// Write a function that that returns a newArray with the square of each number

 let numbers = [2, 4, 9, 12, 7, 18, 22, 3];

// const squareOfNumbers = (arr) => {
//     let newArray = []
//     for (let i=0; i < arr.length; i++) {
//         newArray.push(arr[i] ** 2)
//         console.log
        
//     }
//     return newArray
// }
// console.log(squareOfNumbers(numbers))

const squareOfNumbersMap= (arr) => {
    
    let newArray = arr.map( element => element ** 2)
    return newArray

}
console.log(squareOfNumbersMap(numbers))

