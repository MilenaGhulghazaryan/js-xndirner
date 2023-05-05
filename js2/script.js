//52
// let num = 555
// let numStr = num + ""
// console.log(+numStr[0] === +numStr[1] || +numStr[1] === +numStr[2] || +numStr[0] === +numStr[2])

//53
// let k = 50;
// let num = 400;
// let numStr = num + "";

// if (num > k) {
//     console.log(num / (+numStr[0] + +numStr[1] + +numStr[2]))
// } else {
//     console.log((+numStr[0] + +numStr[1] + +numStr[2]) / num);
// }


//54
// let num = 756;
// let numStr = num + "";

// if (+numStr[0] > +numStr[1] && +numStr[0] > +numStr[2]) {
//     console.log('max=' + numStr[0]);
// } else if (+numStr[1] > +numStr[0] && +numStr[1] > +numStr[2]) {
//     console.log('max=' + numStr[1]);
// } else if (+numStr[2] > +numStr[1] && +numStr[2] > +numStr[0]) {
//     console.log('max=' + mnumStr[2]);
// }

//55
// let num = 756;
// let numStr = num + "";

// if (+numStr[0] < +numStr[1] && +numStr[0] < +numStr[2]) {
//     console.log('min=' + numStr[0]);
// } else if (+numStr[1] < +numStr[0] && +numStr[1] < +numStr[2]) {
//     console.log('min=' + numStr[1]);
// } else if (+numStr[2] < +numStr[1] && +numStr[2] < +numStr[0]) {
//     console.log('min=' + numStr[2]);
// }

//56
// const num = 349
// let miavor = num % 10
// let tasnavor = (num % 100 - miavor) / 10
// let haryuravor = (num - 10 * tasnavor - miavor) / 100

// if (miavor > tasnavor) {
//     console.log((miavor + tasnavor + haryuravor) / num)
// } else {
//     console.log(num);
// }


//57
// const num = 123
// let miavor = num % 10
// let tasnavor = (num % 100 - miavor) / 10
// let haryuravor = (num - 10 * tasnavor - miavor) / 100

// if(miavor){
// if(num>300){
//  console.log(tasnavor / miavor); 
// }else{
//    console.log(haryuravor / miavor); 
// }
// }


//58
// let f;
// const num = 583
// let miavor = num % 10
// let tasnavor = (num % 100 - miavor) / 10
// let haryuravor = (num - 10 * tasnavor - miavor) / 100

// if (tasnavor + haryuravor < 5) {
//     f = 'a'
// } else {
//     f = 'b'
// }
// console.log(f)


//59
// const num = 792
// const numStr = num + ""
// if (+numStr[0] < +numStr[1]) {
//     if (+numStr[1] < +numStr[2]) {
//         console.log(numStr[0] + numStr[1] + numStr[2]);
//     } else {
//         console.log(numStr[2] + numStr[0] + numStr[1]);
//     }
// } else if (+numStr[1] < +numStr[2]) {
//     if (+numStr[2] < +numStr[0]) {
//         console.log(numStr[1] + numStr[2] + numStr[0]);
//     } else {
//         console.log(numStr[1] + numStr[0] + numStr[2]);
//     }
// } else if (+numStr[2] < +numStr[0]) {
//     if (+numStr[0] < +numStr[1]) {
//         console.log(numStr[2] + numStr[0] + numStr[1]);
//     } else {
//         console.log(numStr[2] + numStr[1] + numStr[0]);
//     }
// }


//60
// const num = 782
// const numStr = num + ""
// if (+numStr[0] > +numStr[1]) {
//     if (+numStr[1] > +numStr[2]) {
//         console.log(numStr[0] + numStr[1] + numStr[2]);
//     } else {
//         console.log(numStr[0] + numStr[2] + numStr[1]);
//     }
// } else if (+numStr[1] > +numStr[2]) {
//     if (+numStr[2] > +numStr[0]) {
//         console.log(numStr[1] + numStr[2] + numStr[0]);
//     } else {
//         console.log(numStr[1] + numStr[0] + numStr[2]);
//     }
// } else if (+numStr[2] > +numStr[0]) {
//     if (+numStr[0] > +numStr[1]) {
//         console.log(numStr[2] + numStr[0] + numStr[1]);
//     } else {
//         console.log(numStr[2] + numStr[1] + numStr[0]);
//     }
// }

//61
// const num = 1234
// const strNum = num + ""

// console.log(+strNum[3] + +strNum[2] === +strNum[1] + +strNum[0]); 

//62
// const num = 4587
// const strNum = num + ""

// if (+strNum[3] + +strNum[1]) {
//     if (num < 5000) {
//         console.log(num / (+strNum[3] + +strNum[1]));
//     } else {
//         console.log(num / (+strNum[0] + strNum[2]));
//     }
// }

//63
// const num = 2731;
// const numStr = num + "";
// if (numStr[0] === '1' || numStr[1] === '1' || numStr[2] === '1' || numStr[3] === '1') {
//     console.log(1);
// } else {
//     console.log(0);
// }


//64
// let y;
// const num = 2732;
// const numStr = num + "";
// if (+numStr[3] + +numStr[2] === 5) {
//     y = 's'
// } else {
//     y = 'd'
// }
// console.log(y);


//65
// let y;
// const num = 2762;
// const numStr = num + "";
// if (+numStr[3] * +numStr[2] === 12) {
//     console.log('y = 12');
// } else {
//     console.log('y=0');
// }

//66
// const num = 4764;
// const numStr = num + "";
// if (+numStr[0] === 4 && +numStr[3] === 4) {
//     console.log('YES');
// } else {
//     console.log('NO');
// }

//67
// const num = 7864;
// const numStr = num + "";
// if (num === Math.pow((+numStr[0] + +numStr[1] + +numStr[2] + +numStr[3]), 2)) {
//     console.log('YES');
// } else {
//     console.log('NO');
// }

//68
// const num = 7884;
// const numStr = num + "";

// if (+numStr[3] > +numStr[2]) {
//     console.log(+numStr[3] * +numStr[1]);
// } else {
//     console.log(1);
// }

//69
// let y;
// const num = 1523;
// const numStr = num + "";

// if (+numStr[0] + +numStr[1] + +numStr[2] + +numStr[3] > 20) {
//     y = 1;
// } else {
//     y = 0;
// }
// console.log(y);


//70
// let y;
// const num = 1523;
// const numStr = num + "";

// if (+numStr[0] * +numStr[1] * +numStr[2] * +numStr[3] > 200) {
//     y = 0;
// } else {
//     y = 1;
// }
// console.log(y);