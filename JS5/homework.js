//232-270


//232
// const arr = [2, 4, 5, 6]
// let sum = 0
// let qarakusain
// for (let i = 0; i < arr.length; i++) {
//     qarakusain = Math.pow(arr[i], 2)
//     sum += qarakusain
// }
// console.log(Math.sqrt(sum / arr.length));

//233
//  const arr = [-10, -4, -7, -2]
//  let sum = 0
//  let qarakusain
//  for (let i = 0; i < arr.length; i++) {
//      qarakusain = Math.pow(arr[i], 2)
//      sum += qarakusain
//  }
//  console.log(Math.sqrt(sum / arr.length));

//234
// const arr = [-10, -4, -7, -2]
// sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum / arr.length);

//235
// const arr = [5, 2, 2, 6]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         sum += arr[i]
//     }
// }
// console.log(sum);

//236
// const arr = [5, 2, 2, 6]
// let multiple = 1
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         multiple *= arr[i]
//     }
// }
// console.log(multiple);

//237
// const arr = [2, 3, 4, 6, 7]
// let multiple = 1
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) {
//         multiple *= Math.pow(arr[i], 2)
//     }
// }
// console.log(multiple);

//238
// const arr = [2, 3, 4, 6, 7]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) {
//         sum += Math.abs(arr[i])
//     }
// }
// console.log(sum);

//239
// const arr = [2, 3, 4, 6, 7, 8, 5, 7, 8, 4, 1]
// let count = 0
// let k = 5
// for (let i = 0; i < arr.length; i++) {
//     if (i % k === 0) {
//         count++
//     }
// }
// console.log(count);

//240
// const arr = [2, 3, -4, 6, 7, 8, -5, 7, -8, 4, 1]
// let positive = 0
// let negative = 0

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         positive++
//     } else {
//         negative++
//     }
// }
// console.log(`drakan tveri qanaky = ${positive}`);
// console.log(`bacasakan tveri qanaky = ${negative}`);

//241
// let a = +prompt()
// let b = +prompt()
// let sum = 0
// for (let i = a; i <= b; i++) {
//     sum += i
// }
// console.log(sum);

//242
// let c = +prompt()
// let d = +prompt()
// let multiple = 1
// for (let i = c; i <= d; i++) {
//     multiple *= i
// }
// console.log(multiple);

//243
// let a = +prompt()
// let b = +prompt()
// let count = 0
// for (let i = a; i <= b; i++) {
//     count++
// }
// console.log(count);

//244
// const arr = [2, 3, -4, 6, 7, -2]
// let k = 3
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     if (Math.abs(arr[i] < k)) {
//         sum += Math.pow(arr[i], 3)
//     }
// }
// console.log(sum);

//245
// const arr = [2, 3, -4, 6, 7, -2]
// let t = 3
// let multiple = 1
// for (let i = 0; i < arr.length; i++) {
//     if (Math.abs(arr[i] < t)) {
//         multiple *= arr[i]
//     }
// }
// console.log(multiple);

//246
// const arr = [2, 3, -4, 6, 7, -2]
// let k = 10
// let count = 0
// for (let i = 0; i < arr.length; i++) {
//     if (Math.abs(arr[i] < k)) {
//         count++
//     }
// }
// console.log(count);

//247
// const arr = [2, 3, -4, 6, 7, -2]
// let k = 4
// let sum = 0
// let middle
// for (let i = 0; i < arr.length; i++) {
//     if (i % k === 0) {
//         sum += arr[i]
//         middle = sum / arr.length
//     }
// }
// console.log(middle);

//248
// const arr = [2, 3, -4, 6, 7, -2]
// let k = 4
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     if (i % k === 0) {
//         sum += arr[i]
//     }
// }
// console.log(sum);

//249
// const arr = [2, 3, -4, 6, 7, -2]
// let multiple = 1
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] - i > 0) {
//         multiple *= arr[i]
//     }
// }
// console.log(multiple);

//250
// const arr = [2, 3, -4, 6, 7, -2]
// let square
// let squareNum
// let k = 4
// let sum = 0
// let middle
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % k === 0) {
//         squareNum = Math.pow(arr[i], 2)
//         sum += squareNum
//         square = Math.sqrt(sum / arr.length)
//     }
// }
// console.log(square);


//251
// const arr = [2, 5, 8, 7, 9, 10]
// let sqrt
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         sqrt = Math.pow(arr[i], 2)
//         sum += sqrt
//     }
// }
// console.log(sum);

//252
// const arr = [2, 5, 8, 7, 9, 10]
// let count = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         count++
//     }
// }
// console.log(count);

//253
// const arr = [2, 5, 8, 7, 9, 10]
// let multiple = 1
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         sum += arr[i]
//         multiple *= arr[i]
//     }
// }
// console.log(`sum = ${sum}, multiple = ${multiple}`);

//254
// const arr = [2, 5, 8, 7, 9, 10]
// let arr2 = []
// let sum = 0
// let middle
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         arr2.push(arr[i])
//         sum += arr[i]
//         middle = sum / arr2.length
//     }
// }
// console.log(middle);

//255
// const arr = [2, 5, 8, 7, 9, 10]
// let arr2 = []
// let sqrt
// let sum = 0
// let square
// let x
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         arr2.push(arr[i])
//         sqrt = Math.pow(arr[i], 2)
//         console.log(sqrt);
//         sum += sqrt
//         x = sum / arr2.length
//         square = Math.sqrt(x)
//     }
// }
// console.log(square);

//256
// const arr = [2, 5, 8, 7, 9, 10]
// let count = 0
// let multiple = 1
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         count++
//         multiple *= arr[i]
//     }
// }

// console.log(`count = ${count}, multiple = ${multiple}`);

//257
// const arr = [2, 0, 8, 7, 0, 10]
// let count = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         count++

//     }
// }
// console.log(count);

//258
// const arr = [3, 5, 8, 7, 9, 10]
// let arr2 = []
// let sum = 0
// let middle
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr2.push(arr[i])
//         sum += arr[i]
//         middle = sum / arr2.length
//     }
// }

// console.log(middle);

//259
// const arr = [2, 5, 8, 7, 9, 10]
// let arr2 = []
// let sqrt
// let sum = 0
// let square
// let x
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 === 0) {
//         sqrt = Math.pow(arr[i], 2)
//         arr2.push(sqrt)
//         sum += sqrt
//         x = sum / arr2.length
//         square = Math.sqrt(x)
//     }
// }

// console.log(square);

//260
// const arr = [5, 7, 6, 21, 49]
// let count = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 7 === 0) {
//         count++
//     }
// }
// console.log(count);

//261
// const arr = [5, 7, 6, 20, 49]
// let sum = 0
// let k = 2
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % k === 0) {
//         sum += arr[i]
//     }
// }
// console.log(sum);

//262
// const arr = [5, 7, 6, 20, 49]
// let multiple = 1
// let m = 5
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % m === 0) {
//         multiple *= arr[i]
//     }
// }
// console.log(multiple);

//263
// const arr = [5, 7, 6, 20, 49]
// let count = 0
// let t = 10
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % t === 0) {
//         count++
//     }
// }
// console.log(count);

//264
// const arr = [5, 4, 7, 20, 49]
// let multiple = 1
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 === 2) {
//         console.log(arr[i]);
//         multiple *= arr[i]
//     }
// }
// console.log(multiple);

//265
// const arr = [5, 8, 8, 22, 49]
// let sum = 0
// let sqrt
// for (let i = 0; i < arr.length; i++) {
//     if ((arr[i] + i) % 3 === 0) {
//         sqrt = Math.pow(arr[i], 2)
//         sum += sqrt
//     }
// }
// console.log(sum);

//266
// const arr = [5, 6, 8, 22, 49, 50, 48, 10, 4, 3, 22]
// let arr2 = []
// let sum = 0
// let middle
// for (let i = 0; i < arr.length; i++) {
//     if (Math.sqrt(i) % 1 === 0) {
//         arr2.push(arr[i])
//         sum += arr[i]
//         middle = sum / arr2.length
//     }
// }
// console.log(middle);

//267
// const arr = [5, 7, 2, 20, 4]
// const arr2 = []
// let sum = 0
// let sqrt
// let x
// let square
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > i) {
//         arr2.push(arr[i])
//         sqrt = Math.pow(arr[i], 2)
//         sum += sqrt
//         x = sum / arr2.length
//         square = Math.sqrt(x)
//     }
// }
// console.log(square);

//268
// const arr = [5, 6, 8, 22, 49]
// let sum = 0
// let sqrt
// let k = 4
// for (let i = 0; i < arr.length; i++) {
//     if (Math.pow((arr[i] + i), 2) % k === 0) {
//         sum += arr[i]
//     }
// }
// console.log(sum);

//269
// const arr = [5, 6, 8, 22, 49]
// let count = 0
// let k = 8
// for (let i = 0; i < arr.length; i++) {
//     if (Math.abs(arr[i] - i) > k) {
//         count++
//     }
// }
// console.log(count);

//270
// const arr = [5, 6, 8, 22, 49]
// let multiple = 1
// let sqrt
// let k = 4
// for (let i = 0; i < arr.length; i++) {
//     if ((arr[i] * i) % 3 === 2) {
//         sqrt = Math.pow(arr[i], 2)
//         multiple *= sqrt
//     }
// }
// console.log(multiple);




