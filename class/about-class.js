// Класс

// Содержание

// Прошлое Классов
// Создание Классов
// Разница Классов и функций
// Вызов Классов и функций
// Объект - тот же Класс

// До ES6 вместо Классов были функции:
function thisIsClass() {
    console.log('Функция вызвана');
}

let car1f = new thisIsClass();
let car2f = new thisIsClass();

console.log(car1f);
console.log(car2f);

// Создание класса
class Car {

}

let car1 = new Car();
let car2 = new Car();

console.log(car1);
console.log(car2);

// То есть, классы - те же функции, но с преимушествами:
console.log(typeof  thisIsClass);
console.log(typeof  Car);

// Вызвать Класс так же как и функцию - не получится. Нужно через new Class()
thisIsClass()
console.log(new Car());

// !!! Мы вызываем Класс так же, как и создаем Объект.
// !!! Доступны те же методы, что и объекту.
let car3 = new Car()
let someObj = new Object()

// Создать новое свойства в обоих случаях
console.log('\n ---  Создать новое свойства в обоих случаях');
car3.name = 'Lorem';
someObj.name = 'Lorem';

console.log(car3);
console.log(someObj);

// или присвоить функцию
console.log('\n ---  или присвоить функцию');
car3.go = thisIsClass
someObj.go = thisIsClass

console.log(car3);
console.log(someObj);
