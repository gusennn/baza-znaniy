// Асинхронность

// Содержание

let showGreeting = () => {
    console.log ('async messages');
}

// setTimeout (showGreeting, 2000)
// setTimeout (() => { console.log ('messages') }, 500)
// setTimeout (() => showGreeting (), 5200)
// Передача аргументов в setTimeout
// Передача аргументов в setTimeout через функцию



// В примерах ниже демонстрируется время, затрачиваемое на
// выполнение кода ( начиная от 1000мс  )
let sum =()=> {
    let sum = 0
    for ( let i = 0; i <= 10000000; i++) {
        sum+= i
    }
    return sum
}

let doAsyncAction =()=> {
    const currentDate = new Date();
    setTimeout( ()=> {
        const nowDate = new Date()
        console.log(`мсек: ${(nowDate - currentDate)-1000}`)
    }, 1000)
}

for (let i = 0; i < 10; i++) {
    doAsyncAction();
    sum();
}

// Если передать задержку в 0 м.сек или не передавать
// задержку Вообще - это ничего не изменит.
// Минимальное время будет ближе к НУЛЮ ( 1 - 4 мс ), но НЕ НОЛЬ
let doAsyncActionTime =()=> {
    const currentDate = new Date();
    setTimeout( ()=> {
        const nowDate = new Date()
        console.log(nowDate - currentDate)
    }, 0)
}
console.log(`\nВремя выполнения асинхронного кода - мсек: `);
doAsyncActionTime();

// Передача аргументов в setTimeout
let someAsync1 =(a, b)=> {
    // сначала инициализируем аргументы
    setTimeout( (a, b, c)=> {
        console.log('Асинхронщина1: \n' + a + b );
        console.log(c)
    }, 0, 3, ' asdasdasd ', {c: 'name'})
    // и передаем их после коллбэка
}
someAsync1()

// Передача аргументов в setTimeout через функцию
let someAsync2 =(a, b)=> {
    // сначала инициализируем аргументы
    setTimeout( (a, b, c)=> {
        console.log('Асинхронщина2: \n' + a + b );
    }, 0, a, b)
    // и передаем их после коллбэка
}
someAsync2(1, 2)