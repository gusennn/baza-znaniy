// Объект

// Содержание

// Функция-конструктор
// Способы получения значения
// Способы получения значения путем сложения строки
// Работа со свойствами объекта


// Создание объекта через конструктор
let user3 = new Object()
console.log(user3);

// Создание массива через конструктор
let user4 = new Array(1,2,3,4,5)
console.log(user4);

// Создание функции через конструктор
let someFunc = new Function('a', 'b', 'return a + b')
console.log(someFunc(1,2));


user1 = {
    name: 'Антон',
    age: 23
}
user1.name = 'Олег'

// Способы получения значения
console.log(user1.name);
console.log(user1['name']);
// Способы получения значения путем сложения строки
console.log(user1['a'+'ge']);


// Работа со свойствами объекта
let someProperty = 'isCat'
let animal = {
    name: 'Антон',
    age: 35,
    // название свойства из переменной
    [someProperty]: false,
    // название свойства путем сложения строк
    ['ma'+'ma']: false
}
console.log(animal);
// Получение свойства
console.log(animal[someProperty]);