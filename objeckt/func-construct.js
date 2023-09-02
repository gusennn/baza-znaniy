// Функции-конструкторы - УСТАРЕЛИ. УЖЕ не используются

// Содержание

// Ниже - псевдо функция-конструктор оюъекта
let generateUser =(firstName, lastName, birthYear, jobYear)=> {
    const currentYear = new Date().getFullYear();
    return {
        firstName,
        lastName,
        name: firstName + ' ', lastName,
        birthYear,
        age: currentYear - birthYear,
        gender: 'male'
    }
}

let genResult = generateUser('Олег', "Петров", 1990, 2000)
console.log(genResult);

// Настоящая функция-конструктор объектов
function Car(engine) {
    this.engine = engine
}

// оператором new, вызывая конструктор, мы СОЗДАЕМ новый ОБЪЕКТ.
// ОБЪЕКТ !!! Без какиъ-либо свойств
// Ключевое слово this получает ссылку на этот объект
// Конструктор возвразщает this, то есть объект без явного указания
let newConstruct1 = new Car('V8')
let newConstruct2 = new Car('V16')
console.log(newConstruct1);
console.log(newConstruct2);