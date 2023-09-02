// Поиск в массиве

// Содержание

// indexOf
// includes

console.log('\n ---- Способы перебора массива\n');

const names = ["Денис", "Егор", "Петр", "Иван", "Олег"]
const numbers  = [1,2,2,3,5,6,6,6,6,4,2,1]
let searchName = 'Петр'
let searchNum = 6
// ----------------- ИМПЕРАТИВНЫЙ МЕТОД. --------------------- //
console.log('\n ---- 1 - for of\n');


for (let name of names ) {
    if ( name === searchName ) {
        console.log(name + ' найден');
        break;
    }
}

// -------------------------------------- //
console.log('\n ---- 2 - indexOf\n');
console.log(names.indexOf(searchName));
// Можно добавить индекс, с которого ведется поиск
if ( names.indexOf(searchName) !== -1 ) {
    console.log(names[names.indexOf(searchName)] + ' найден');
}

// -------------------------------------- //
console.log('\n ---- 3 - includes\n');
console.log(names.includes(searchName));
// Можно добавить индекс, с которого ведется поиск
if ( names.includes(searchName) ) {
    console.log(searchName + ' найден');
}

// -------------------------------------- //
console.log('\n ---- 4 - поиск с indexOf при дублирующих элементах. \nПервый найденный элемент\n');
console.log(numbers.indexOf(searchNum));
// Можно добавить индекс, с которого ведется поиск
if ( numbers.indexOf(searchNum) !== -1) {
    console.log( 'Число: ' + searchNum + ' найден на позиции ' + numbers.indexOf(searchNum));
}

// -------------------------------------- //
console.log('\n ---- 5 - поиск с indexOf при дублирующих элементах. \nПоследний найденный элемент\n');
console.log(numbers.lastIndexOf(searchNum));
// Можно добавить индекс, с которого ведется поиск
if ( numbers.indexOf(searchNum) !== -1) {
    console.log( 'Число: ' + searchNum + ' найден на позиции ' + numbers.lastIndexOf(searchNum));
}