// function makeFunc(){
//     let name = 'Covalence';
//     function displayName(){
//         alert(name);
//     }
//     return displayName;
// }

// let myFunc = makeFunc();
// myFunc();

// console.log('end of script');

// var passed = 3;

// var addTo = function () {
//     var inner = 2;
//     return passed + inner;
//     };

// console.dir(addTo());

// var passed = 4;

// console.dir(addTo());

var addTo = function(passed){       //outer function

    var add = function(inner){     // inner function
        return passed + inner;
    };
    return add;
};

var addThree = new addTo(3);

var addFour = new addTo(4);


// console.dir(addThree);

// console.dir(addFour);

console.log(addThree(1));
console.log(addFour(1));