// Перебор объекта

// Содержание

// Вывод свойства и значения
// Безопасное обращение к свойству ( без возвращения ощибки )
// Оператор опциональной последовательности ( Чейнинг-оператор )

let user1 = {
    name: 'Антон',
    age: 23
}

for ( let property in user1) {
    console.log(property, user1[property]);
}

let user2 = {
    name: 'Олег',
}

// console.log(user2.fio.name); - выдаст ошибку

// Безопасное обращение к свойству ( без возвращения ощибки ):

let defenceReq = user2 && user2.fio && user2.fio.name // Безопасно, но громоздко
console.log(defenceReq);

// Упростим это с помощью Оператора опциональной последовательности ( Чейнинг-оператор )
let defenceReq2 = user2?.fio?.name
console.log(defenceReq2);