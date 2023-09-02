// Содержание

// spread-оператор - разделяет элементы массива
// детруктуризация
// rest-оператор -
// детруктуризация объекта
// Сохранение значений объекта

let sum =(...args)=> {
    console.log(args);
}

let arrNum = [230,450,230,320,10]
let arrNum2 = [230,450,230,320,10]

sum(1,2,378,4,235,6,7,8,23,465, ...arrNum) // Получим один массив с элементами из разных источников
sum(1,2,378,4,235,6,7,8,23,465, arrNum) // Получим вложенный массив

console.log('\nВывож массива arrNum2: ');
console.log(arrNum2);

// Полезно, когда надо передать не сам массив, а только его элементы
// ( или если массив не принимается вовсе )
console.log('\nВывож массива arrNum2 c разделением spread-оператором: ');
console.log(...arrNum2);


// детруктуризация
// детруктуризация - присвоение переменным элементов массива
// let arr0 = arr[0]
// let arr1 = arr[1]
// let arr2 = arr[2]
// Вместо такой записи, используем деструктуризацию

let [arrItem0, arrItem1, arrItem2, ...arrItemOther] = arrNum;
console.log(arrItem0, arrItem1, arrItem2);

// Остальные элементы массива в последнюю переменную arrItemOther
console.log(...arrItemOther);

// детруктуризация объекта
let user1 = {
    name: 'Антон',
    age: 23
}

let {name, age} = user1 // Сохранение значений объекта
console.log(name, age);
let {name: userName, age: userAge} = user1 // Сохранение значений объекта
console.log(userName, userAge);
