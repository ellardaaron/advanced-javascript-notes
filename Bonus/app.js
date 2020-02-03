function doStuff() {
    
    let stuff = 'stuff';
    
    return function () {
        return stuff;
    }
}

let test = doStuff();

console.log(test());

//------------------

let count = 0;
let btn = document.getElementById('big-button');

btn.addEventListener('click', function(){
    count++;
    console.log(count);
});

//--------------------

// to make the above have a closure:

function counter () {
    let count = 0;

    return function() {
        count++;
        return count;
    }
}

let value = counter();

let btn2 = document.getElementById('small-button');
btn2.addEventListener('click', function(){
    console.log(value());
});
