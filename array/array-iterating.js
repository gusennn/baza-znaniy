// Перебор массива

// Содержание

// for of
// for in
// forEach


console.log('\n ---- Способы перебора массива\n');
let number = [ 1,2,3,4,5,6,7,8,9 ]

// -------------------------------------- //
console.log('\n ---- 1 - for of\n');

for ( let el of number ) {
    console.log(el);
}

// -------------------------------------- //
console.log('\n ---- 2 - for in\n');

for ( let el in number ) {
    console.log(el);
}

// -------------------------------------- //
console.log('\n ---- 2 - forEach\n');

number.forEach( (element, index, array )=> console.log(element)  )
