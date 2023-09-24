// Класс

// Содержание

// Создание Класса
// Передача и хранение данных
// !!! Класс - это функция.
// !!! constructor() - это обычная функция, основное назначение
//                      которой - выделение памяти под объект.
// Создаем и описание Класса
// При создании объекта, мы НЕ ОБЯЗАНЫ его сохранять в переменной let или const
// Примеры


// Создание Класса
class Car {

}
// !!! Здесь СОЗДАЕТСЯ ОБЪЕКТ класса Car. Вызов Класса.
new Car();

// Как было сказано ранее, Класс - это та же функция. ( см. about-class.js )
// При вызове Класса, создается Объект ( см. about-class.js )
// Дополнить....

// Передача и хранение данных.
let car1 = new Car('BMW');
// Значение BMW передано внутрь Класса, но он не отображается в Объекте

console.log(`\nНет значения в объекте Класса Car`);
console.log(car1);

class Car1 {
    constructor(carModel) {
        console.log(`\nЗначение присутствует: ${carModel}`)
    }
}

new Car1('BMW')

// Передача аргумента и его сохранение
class Car2 {
    constructor(carModel) {
        this.carModelName = carModel;
        console.log(`\nЗначение присутствует: ${this.carModelName}`)
    }
}
console.log(new Car2('BMW'))

// !!! Класс - это функция.
// !!! constructor() - это обычная функция, основное назначение которой - выделение памяти под объект.
// constructor() - это метод Класса Car
// !!! основное назначение constructor() - ВЫДЕЛЕНИЕ ПАМЯТИ ПОД ОБЪЕКТ ( оператор new - выделение памяти )
// !!! во-вторых, назначение constructor() - настройка первоначального состояния объекта



// Создаем Класс
class BMW {
    // Описываем Объект этого Класса
    constructor(model, color) {
        this.modelName = model;
        this.color = color
    }
}

// Пример

// Создаем Объект класса BMW. Да, можно и так, в массиве
let carGarage = [
    new BMW('Lada', 'Белый'),
    new BMW('Mustang', 'желтый'),
]
// Созданные объекты мы не сохраняли в переменной
// При создании объекта, мы НЕ ОБЯЗАНЫ его сохранять в переменной let или const
console.log(carGarage);
// Мы сразу можем использовать созданный объект
// т.е. ( передавать в нее функцию, свойства и т.д  ):
let garageCar1 = carGarage[1];
garageCar1.name = 'Бэха'
console.log(garageCar1);
console.log("Car name is: " + garageCar1.name);

// Пример

let oleg = {
    name: 'Олег',
    lastName: 'Петров',
    gender: 'Мужчина',
    type: 'человек'
}

let ivan = {
    name: 'Иван',
    lastName: 'Иванов',
    gender: 'Мужчина',
    type: 'человек'
}

let nikita = {
    name: 'Олег',
    lastName: 'Романов',
    gender: 'Мужчина',
    type: 'человек'
}

// Реализуем эти же объекты компактнее, через конструктор
class Human {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.gender = 'мужчина';
        this.type = 'человек';
    }
}

let persons = [
    new Human('Олег', 'Петров'),
    new Human('Иван', 'Иванов'),
    new Human('Олег', 'Романов'),
]

console.log(persons);

































