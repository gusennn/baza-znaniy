// Исключение и замыкание

// Содержание
// Конструкция tryCatch
// Какие ошибки нельзя перехватить


// Конструкция tryCatch - нацелена на то,
// чтобы попытаться выполнить код, и если интерпретатору
// это не удастся, и он выбросит ошибку,
// то эту ошибку можно было отловить и обработать

// Конструкция tryCatch состоит из 3 блоков:

// try - тут описываем потенциально опасный код.
// И если ошибка будет выброшена в блоке try, то
// мы сможем перехватить эту ошибку

// catch - тут отлавливается перехваченная в блоке
// try ошибка и обрабатывается

// finally - код, который выполнится вне зависимости
// от того, была ли ошибка в try или нет

// // Пример 1
// let divider =(a,b)=> {
//     if (a === 0 || b === 0) {
//         throw new Error('На ноль делить нельзя')
//     }
//         return a/b
// }
//
// try {
//     divider(12,0)
// } catch (error) {
//     console.log(error);
// }
//
// // Пример 2
//
// let divider1 =(a,b)=> {
//     if (a === 0 || b === 0) {
//         throw new Error('На ноль делить нельзя')
//     }
//     return a/b
// }
//
// let safelyDivider =(a,b)=> {
//     try {
//         console.log('Мы внутри try');
//         console.log(divider1(a,b));
//     } catch (error) {
//         console.log('Мы перехватили ошибку');
//         console.log(error);
//     } finally {
//         console.log('Мы внутри finally');
//     }
// }
// console.log(safelyDivider(2,0));

// Какие ошибки нельзя перехватить
// 1 - СИНТАКСИЧЕСКИЕ:

// try {
//     console.log('sdfsdfsfd);
//     // "забыли" закрыть кавычки
// } catch (e) {
//     console.log(e);
// }

// try {
//     setTimeout( ()=> {throw new Error('Какая-то ошибка')}, 2000)
// } catch (e) {
//     console.log(e)
// }

setTimeout( ()=> {
    try {
        throw new Error('Какая-то ошибка')
    } catch (e) {
        console.log(e)
    }
}, 2000)