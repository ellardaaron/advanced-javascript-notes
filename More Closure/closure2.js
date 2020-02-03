function greeter(personName) {
    return function () {
        alert('Hello ' + personName + '!');
    }
}

let greetJohn = greeter('John');        //when  these are passed they go back up to the top and
let greetJane = greeter('Jane');        //run with the function that has already been stated.
                                        // such as the function is being stated each time you 
greetJohn();                            // declare a new variable with let.
greetJane();    //must call the functions in order for them to run

console.log('end of script');