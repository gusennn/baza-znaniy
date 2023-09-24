// Класс

// Содержание
// Наследование
// super() - это вызов конструктор родителя
// super() - реализывать ТОЛЬКО внутри конструктора
// super() - реализывать ТОЛЬКО в Дочернем
// super() - реализывать ДО доступа к this
// Полиморфизм. Наследование через super.speak() чтобы не дублировать

// Пример

// Наследование в Классах - это когда класс является дочерним для родительского класса
class Human {
    constructor(name){
        this.name = name
        this.age = 21
    }
}

// Наследование указывается через extends
class Man extends Human {
    // у дочернего класса Конструктора может и не быть. Конструктор унаследуется от родителя
    // если у Дочернего класса вызвать свой Конструктор,
    // то родительский будет недоступен, как и его свойства
    constructor(name) {
        // super() - вызов конструктора родителя
        super(name);
        this.gender = 'Мужской пол'
    }
    // мы создали в дочернем классе СВОЙ конструктор,
    // а чтобы был доступ к родительским свойствам - вызвали конструктор родителя
    // через super().
    // В скобках super(name) мы передаем ИЗ дочерней В родителькую, значение,
    // полученное при созжании объекта new Man ниже
}

let user = new Man('Николай Петрович')
console.log(user)


// Пример

class Human1 {
    constructor(name){
        this.name = name
    }

    speak() {
        console.log('Я разговариваю');
    }
}

class Man1 extends Human1 {
    constructor(name) {
        super(name);
        this.gender = 'Мужской пол'
    }

    buildHouse() {
        console.log('Пользователь строит дом');
    }
}

// Всё что есть у родителя, есть у дочернего.
// У Man1 нет поведения speak, однако он вызвался, т.к. ызуфл есть у родителя Human1
let user1 = new Man1('Николай Петрович')
console.log(user1.speak())

// !!! НО при создании нового объекта класса Human1, методы дочерних НЕ ДОСТУПНЫ
let olga = new Human1('Ольга Петровна')
// !!! Метод buildHouse() не доступен для нового объекта olga
// console.log(olga.buildHouse());

// Пример. Наследование через super
class Man2 extends Human1 {
    constructor(name) {
        super(name);
        this.gender = 'Мужской пол'
    }

    buildHouse() {
        console.log('Пользователь строит дом');
    }

    speak() {
        super.speak()
        // Дублирует метод родителя
        console.log('Я разговариваю много');
        // + еще и собственное
    }
    // метод speak() без super.speak() внутри, просто переопределит родительский speak()
}

let user2 = new Man2('Игорь Игорев')
console.log(user2);
console.log(user2.speak());