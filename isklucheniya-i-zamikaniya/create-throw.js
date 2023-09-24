// Исключение и замыкание

// Содержание

// Создание ошибки
// throw и Error()
// Получить ошибку и выдать его позже

let divider =(a,b)=> {
    return a/b
}

console.log(divider(0,0));
console.log(divider(211,0));

let divider1 =(a,b)=> {
    if ( a === 0 || b === 0 ) {
        // throw 'На ноль делить нельзя' - выведет просто ошибку
        throw new Error('На ноль делить нельзя')
        // Выведет болеее подробную информацию об ошибке
        // например, инфо о том, что ошибка находится
        // внутри функции divider1

    }
    return a/b;
}

console.log(divider1(12,0));

let divider2 =(a,b)=> {
    if ( a === 0 || b === 0 ) {
        // Получить ошибку и выдать его позже
        const getError = throw new Error('На ноль делить нельзя')
        throw getError;
    }
}

console.log(divider2(44, 0))