// 场景：A数组值 双倍的形式放到B数组
var arrANumber = [1, 2, 3, 4, 5];
var arrBNumber = [];
for (var i = 0; i < arrANumber.length; i++) {
    console.log(arrANumber[i])
    arrBNumber.push(arrANumber[i] * 2)
}
console.log(arrBNumber.toString());



//ES6 map
let doubled = arrANumber.map(number => {
    return number * 2;
})
doubled.forEach(item => console.log(item));

// 场景二 将A对象数组某个属性值存储到B数组中
let cars = [
    {mode:"Buick",price:"CHEAP"},
    {mode:"BMW",price:"expensive"}
]

let doubledCars = cars.map(item => {
    return item.price;
})
console.log(doubledCars.toString());