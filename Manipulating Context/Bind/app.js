function sayHello(name, age) {
    console.log(name);
    console.log(age);
    console.log(this);
}

let greeter = sayHello.bind('Jane');
greeter('John', 27);


