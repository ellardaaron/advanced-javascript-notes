function sayHello(name, age) {
    console.log(name);
    console.log(age);
    console.log(this);
}

sayHello.call('Jane', 'John', 27);

//-----------------------

function doSomething() {
    console.log(this);
};

doSomething.call('Katherine');

//-----------------------


