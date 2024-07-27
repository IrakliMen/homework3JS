// task1
function subtract (num1, num2) {
    return num1 - num2;
}
console.log(subtract(10, 5));

// task2
const difference = function (num1, num2){
    return num1 - num2;
}
console.log(difference(11, 2));

// task3
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(10, 10));

// task4
function isPositive (num1){
    if (num1 >= 0){
        return "true"
    }else{
        return "false"
    }
}
console.log(isPositive(1));
console.log(isPositive(-1));
console.log(isPositive(0));

// task5
const getSquare = (num1) => num1 * num1;
console.log(getSquare(9));

// task6
const printDetails = (namee, age, profession) => `${namee} ${age} ${profession}`;
console.log(printDetails("Irakli", 26, "Fraud cntroller"));

// task7
function sumNumbers (array) {
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}
const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sumNumbers(array1));