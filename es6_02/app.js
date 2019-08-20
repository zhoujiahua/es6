var colors = ["red", "blue", "green"];
//ES5 for
for (var i = 0; i < colors.length; i++) {
    console.log("ES5" + colors[i]);
}

//ES6 forEach
colors.forEach((item) => {
    console.log("ES6", item);
})

//ES6遍历数组 求和
let numbers = [1, 2, 3, 4, 5, 6];
let sum1 = 0;
let sum2 = 0;

//方式一
numbers.forEach((item) => {
    sum1 += item;
})

//方式二
numbers.forEach(addSum);

function addSum(number) {
    sum2 += number
}

console.log("sum1", sum1);
console.log("sum2", sum2);