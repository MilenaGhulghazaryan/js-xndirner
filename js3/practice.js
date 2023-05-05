// //----------------------------59

// let x = 321
// let units = x % 10
// let tens = (x % 100 - units) / 10
// let hundreds = (x - 10 * tens - units) / 100
// let min = units
// if (tens < min) {
//     min = tens
// }
// if (hundreds < min) {
//     min = hundreds
// }
// let max = units
// if (tens > max) {
//     max = tens
// }
// if (hundreds > max) {
//     max = hundreds
// }

// let middle = units
// if (middle === min || middle === max) {
//     middle = tens
// }
// if (middle === min || middle === max) {
//     middle = hundreds
// }

// console.log(min, units + tens + hundreds - min - max, max);

//7-i bajanvox eranish tvery 
//
// let x = 100
// let count = 0
// while (x < 1000) {
//     count++
//     if (x % 7 === 0) {
//         console.log(x);
//         x += 7
//     } else {
//         x++
//     }
// }


// sum from 1 to 100

// let sum = 0
// for (let i = 1; i <= 5; i++) {
//     sum += i
// }
// console.log(sum);


// 171 
// const n = +prompt('greq tiv')  
// let sum = 0
// for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//         sum += i
//     }
// }

// console.log(sum);

//172
// const n = 20
// let multiple  = 1
// for(let i = 1; i < 20; i++){
//     if(n  % i === 0){
//         multiple *= i
//         console.log(i);
//     }
// }
// console.log(multiple);

//221
// const x = 500
// let divided = 10
// let count = 1

// while (x / divided >= 1) {
//     count++
//     divided *= 10
// }

// console.log(count);