// Исключение и замыкание

// Содержание

// Замыкание - это использование объявленной переменной

let num = 1
let numCounter =()=> {
    console.log(num++)
}
numCounter();
numCounter();
numCounter();

// В примере выше, функция numCounter () - замыкает
// переменную num. Т.е. использует внешнюю переменную
// и воздействует на нее

// Пример использования одной переменной, без её
// объявления глобально

let numCounterN =(someNum)=> {
    return ()=> {
        someNum++
        console.log(`Функция вызвалась. Значение изменено до ${someNum}`)
    }
}

let getCount = numCounterN(1);
let getCount10 = numCounterN(10);
// У нас 2 функции, которые используют НЕглобальную
// переменную независимо друг от друга
// p.s. функции можно добавлять

getCount();
getCount();
getCount();
getCount();
getCount();

getCount10();
getCount10();
getCount10();
getCount10();
getCount10();