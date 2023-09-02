// Поиск в массиве

// Содержание

// arr.findIndex - функция для поиска при неизвестном искомом  ( возвращает индекс, или -1 )
// arr.find - функция для поиска при неизвестном искомом  ( возвращает булево значение )
// метод some() - для поиска при неизвестном искомом ( вернет true, если хотя бы одно условие совпадает )
// метод every() - для поиска при неизвестном искомом ( вернет true, если условие истинно для всех элементов массива )
// * Бонус. Проверка на объектаъ
// метод filter()

let arr = [1,2,3,4,5,3,4,5,6,7,3,4,5,8,9]

let checkNumber =(arrItem)=> {
    return arrItem % 3 === 0
}

console.log(arr.findIndex(checkNumber));

console.log(arr.findIndex( arrItem => { return arrItem % 3 === 0 } ));
console.log(arr.find( arrItem =>  arrItem % 3 === 0 ));


console.log(arr.findIndex( arrItem => { return arrItem % 3213 === 0 } ));
console.log(arr.find( arrItem => arrItem % 3213 === 0 ));

console.log(arr.some( item => item > 15 ));
console.log(arr.every( item => item > 0 ));


let employers = [
    {name: 'Мария', department: 'it', salary: 60000},
    {name: 'Андрей', department: 'Продажи', salary: 80000},
    {name: 'Татьяна', department: 'Менеджер', salary: 50000},
    {name: 'Олег', department: 'it', salary: 69000},
]

let findEmployer1 = employers.find( employer => employer.name === 'Мария' && employer.department === 'it')
let findEmployer2 = employers.some( employer => employer.salary === 69000)
let findEmployer3 = employers.every( employer => employer.salary > 49000)
console.log(findEmployer1);
console.log(findEmployer2);
console.log(findEmployer3);

let arrFilter = arr.filter( fItem => fItem % 2 === 0 )
let objFilter1 = employers.filter( fItem => fItem.department === 'it' )
let objFilterSalary = employers.filter( fItem => fItem.salary < 60000 )
let objFilter2 = employers.filter( fItem => fItem.department === 'it3534534' )
console.log(arrFilter);
console.log(objFilter1);
// filter всегда возвращает массив
console.log(objFilter2);
console.log(objFilterSalary);
