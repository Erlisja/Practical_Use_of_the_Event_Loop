// Part 1
let counter = 0;

function recursiveFunction() {
    counter++;
    try {
        // calling the function recursively
        recursiveFunction();

    }
    catch (error) {
        console.log("Error caught: " + error.message);
        console.log("Number of recursive calls before stack overflow: ", counter);
    }
}

recursiveFunction();

