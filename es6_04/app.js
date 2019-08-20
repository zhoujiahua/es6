// 场景一 将A对象数组指定类型值存储到B数组中
var products = [{
        name: "cucumber",
        type: "vegetable"
    },
    {
        name: "bananna",
        type: "fruit"
    },
    {
        name: "celery",
        type: "vegetable"
    },
    {
        name: "orange",
        type: "fruit"
    }
]

// ES5
var typeProducts = [];
for (var i = 0; i < products.length; i++) {
    if (products[i].type === "fruit") {
        typeProducts.push(products[i].name);
    }
}
console.log(typeProducts.toString())

// ES6
let newTypeProducts = products.filter(item => {
    return item.type === "fruit";
})
console.log(newTypeProducts[0])
console.log(newTypeProducts[1])


