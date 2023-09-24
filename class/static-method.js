// Класс

// Содержание

// Статический метод класса - это методы, которые вызываются на типе,
// а не на объекте. То есть, без создания объекта класса ( new Class() ).
// Пример такого вызова: методы Math. , Array.isArray() и т.д.

// Такой вызов называется ВЫЗОВ У ТИПА, а не у Объекта класса

// Первый тип вызова называется ЭКЗЕМПЛЯРНЫЙ, второй - СТАТИЧЕСКИЙ
// Как так делать ?

class Text {
    isText(str){
        return typeof str === 'string'
    }

    static isTextStatic(str){
        return typeof str === 'string'
    }
}

let txt = new Text()
console.log(txt.isText('dfdfdf'))
// Это был ЭКЗЕМПЛЯРНЫЙ тип

console.log(Text.isTextStatic('dsdsddsd'));
// Это уже СТАТИЧЕСКИЙ тип. Мы выхываем метод сразу у типа, как у Math.random()
