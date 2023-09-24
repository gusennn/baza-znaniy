// Класс

// Содержание

// Кастомные методы *ES6
// set и get
// set - обязательно принимает аргумент
// get - обязательно должен что-то вернуть, которое будет результатом get
// !!! Основное предназначение get и set - преобразование МЕТОДОВ объекта/класса В СВОЙСТВА
// !!! В методах() объекта хранится ЛОГИКА
// !!! И чтобы к методам можно было обращаться как к свойствам, используем Геттеры и Сеттеры
// !!! Иначе говоря, чтобы логику метода скрыть под оболочкой свойства

// Пример Класса. Кастомные методы *ES6
let classSomeMethodName = 'powScore'

class Sportsman {
    constructor(){
        this.score = []
    }

    addScore (score){
        this.score.push(score)
    }

    scoreCalculate () {
        let scoreSum = 0;

        if ( this.score.length === 0 ) {
            return 0
        }

        for ( let i=0; i < this.score.length; i++ ) {
            scoreSum += this.score[i]
        }

        return scoreSum
    }

    // не забываем, что все методы в классе похожи на Свойства объекта
    // соответственно, названия им тоже можно давать так же:
    ['get'+'Average'] () {
        return Math.round(this.scoreCalculate() / this.score.length)
    }
    // см. obj-base.js ( Способы получения значения путем сложения строки )

    // Можно и так
    [classSomeMethodName]() {
        return this.scoreCalculate()**2
    }
}

let newSportsman = new Sportsman()
newSportsman.addScore(12)
newSportsman.addScore(2)
newSportsman.addScore(4)

console.log(newSportsman)
console.log(newSportsman.scoreCalculate())
console.log(newSportsman.getAverage())
console.log(newSportsman.powScore())


let user1 = {
    // name - свойство
    name: 'ivan',
    // birthYear - это МЕТОД. НЕ СВОЙСТВО

    birthYear(year) {
        const currentYear = new Date().getFullYear()
        this.age = currentYear - year
    }
}
user1.birthYear = 3000
console.log(user1);
console.log(user1.birthYear);

// Чтобы использовать его как Свойство, добавим set
let user2 = {
    // name - свойство
    name: 'ivan',

    // birthYear - это МЕТОД.  Но SET маскирует его под СВОЙСТВО
    set birthYear(year) {
        const currentYear = new Date().getFullYear()
        this.age = currentYear - year
        this._birthYear = year
    },
    // Чтобы использовать его как Свойство, добавим set

    // Добавим get, чтобы была возможность получать значение свойства birthYear()
    get birthYear() {
        return this._birthYear;
    } // результат 20.
    // undefined. Если вывести без get

}
user2.birthYear = 2000
console.log(user2);
console.log(user2.birthYear);

class User {
    set birthYear(year) {
        const currentYear = new Date().getFullYear()
        this.age = currentYear - year
        this._birthYear = year
    }
    // Чтобы использовать его как Свойство, добавим set

    // Добавим get, чтобы была возможность получать значение свойства birthYear()
    get birthYear() {
        return this._birthYear;
    }
}

let classUser = new User();
classUser.birthYear = 2000;
console.log(classUser.birthYear)