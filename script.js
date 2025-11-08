function person(name, age) {
    this.name = name
    this.age = age
}

const ananya = new person("natty", 3)
console.log(ananya)

person.prototype.daggy = ananya.name