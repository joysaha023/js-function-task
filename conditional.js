// function isEven(number) {
//     if (number % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isEven(5));
// console.log(isEven(78));


// function evenSizedString(str){
//     const size = str.length;
//     console.log(str, size);
//     if(size % 2 === 0){
//         console.log('even size')
//     }
//     else{
//         console.log('odd size')
//     }
// }

// evenSizedString('Dhaka')

function doubleOrTriple(number, doDouble) {
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));