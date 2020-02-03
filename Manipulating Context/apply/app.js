function sayHello(name, age) {
    console.log(name);
    console.log(age);
    console.log(this);
}

// sayHello.apply('Jane', ['John', 27]);

//above is going to run the function sayHello, it is going
//to set the context to Jane and then it is going to take each
//item from the array and pass it though the function

let args = ['John', 27];
sayHello.apply('Jane', args);





// //-----------------------

// function doSomething() {
//     console.log(this);
// };

// doSomething.call('Katherine');

// //-----------------------


