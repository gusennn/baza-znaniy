// Преобразование массива. Клонирование

// Содержание. Клонирование с помощью
// for ()
// slice
// map
// spread-оператор - разделяет элементы и обьединяет в новый массив
// sort


// !!!!!
// Все массивы выводят одинаковый результат.
// Все массивы ссылаются на один arr
// НО ВСЕ ОНИ НЕ РАВНЫЙ ДРУГ ДРУГУ !!!


let arr = [9,1,2,3,4,5,3,4,5,6,7,3,4,5,8,9]

// Кейс: клонирование массива
// Императивный подход. ВЕЛОСИПЕД !

let newArr = [];

for ( let i = 0; i<arr.length; i++ ) {
    newArr.push(arr[i])
}

// Деклоративный подход.

let cloneSlice = arr.slice();
//Запись аналогична let newArrSlice = arr.slice(0, arr.length)

let cloneMap = arr.map( m => m)

//spread - оператор
let cloneSpread = [...arr]

let cloneJSON = JSON.stringify(arr)

let cloneJSONparse = JSON.parse(cloneJSON)

console.log(newArr);
console.log(cloneSlice);
console.log(cloneMap);
console.log(cloneSpread)
console.log(cloneJSON)
console.log(cloneJSONparse)

// Элементы массивов одинаковые
console.log(cloneJSONparse[0] === arr[0]);
// Но сами массивы не равны
console.log(cloneJSONparse === arr);


