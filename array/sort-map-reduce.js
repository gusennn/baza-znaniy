// Преобразование массива

// Содержание

// Метод map() - формирует НОВЫЙ массив, содержащий результат вызова переданной
//               функции для каждого элемента ( коллбэк внутри map ).
//               !!! Важно. Количество элементов на выходе будет сопостовим с исходным массивом.
//               См. console.log(getAllSalary2);

// Чтобы этого избежать, можно сначала фильтровать массив.
// См. console.log(getAllSalary3);

// sort() - сортировка массива
// reduce() - результатом метода reduce является конечное значение аккумулятора

// Оптимизация. Для оптимизации, желательно, сначала вызывать filter,а потом map.
// Так операция будет меньше: перебираем не все элементы, а только отфильтрованные

let employers = [
    {name: 'Мария', department: 'it', salary: 60000},
    {name: 'Андрей', department: 'Продажи', salary: 80000},
    {name: 'Татьяна', department: 'Менеджер', salary: 50000},
    {name: 'Олег', department: 'it', salary: 69000},
]

// Кейс: получить размер ЗП у каждого сотрудника
// Императивный подход. ВЕЛОСИПЕД !

let salaryArr = [];

for ( let i = 0; i < employers.length; i++ ) {
    salaryArr.push(employers[i].salary)
}
console.log(salaryArr);

// Деклоративный подход

let getAllSalary = employers.map( salaryItem => salaryItem.salary)
console.log(getAllSalary);

let getAllSalary2 = employers.map( salaryItem =>
{ if ( salaryItem.salary > 70000 ) return salaryItem })
console.log(getAllSalary2);

let getAllSalary3 = employers.filter( salaryFilter => salaryFilter.salary > 70000)
                              .map( salaryItem => salaryItem.name )
console.log(getAllSalary3);

const names = [ 'Борис','Анна','Олег','Анастасия','Вера']
const numbers = [1223,43,56,1,2434,23,5567,0,12,1]
const numbers2 = [1223,43,56,1,2434,23,5567,0,12,1]

// Сортировка имен в алф.порядке
let sortArr = names.sort()
console.log(sortArr);

// Номера сортируются неправильно. Не по убыванию, а по первым числам
let sortNumArr = numbers.sort()
console.log(sortNumArr);

let sortNumArrTrueUp = numbers.sort( (a, b)=> b - a); // По возрастанию
let sortNumArrTrueDown = numbers2.sort( (a, b)=> a - b ); // По убываанию
console.log(sortNumArrTrueUp);
console.log(sortNumArrTrueDown);

let numAccum = names.reduce( (accumulator, item)=> accumulator + item, 0 )
// для string let numAccum = names.reduce( (accumulator, item)=> accumulator + ' ' + item, '' )
// или let numAccum = numbers.reduce( (acc, item)=> { return  acc + item }, 0 )
console.log(numAccum)