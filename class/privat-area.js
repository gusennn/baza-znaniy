// Класс

// Содержание

class Cat {
    #health;
    constructor() {
        this.#health = 100
        // this.#hungry = 100 // нельзя, надо сначала объявить
    }

    eat() {
        this.#health += 10
    }
}
let kitty = new Cat()
console.log(kitty);