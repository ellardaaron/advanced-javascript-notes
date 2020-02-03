// let person = {
//     name: 'John',
//     sayHello: function() {
//         console.log(this.name);
//     }
// };
// person.sayHello();



// //this calls on what is left to the dot when called
// // so in this case left of the sayHello command
// //would be the variable person


let btn = document.getElementById('big-button');

btn.addEventListener('click', function(){
    console.log(this);
    //style transform
    this.style.textTransform = "uppercase"
});



//when a dom event lister runs an function it sets
// the context of the function equal to the dom
//element that the event occurred on




// function testThis(){
//     console.log(this);
// }
// testThis();

// //this in this case refers to the global content
// //which in this case would be the window



// //so if we add this:

// let btn = document.getElementById('big-button');
// btn.addEventListener('click', testThis);

// console.log('end of script');

// //the function is being called from the dom event listener
// //so is overrides this function's context and sets it equal to
// //element