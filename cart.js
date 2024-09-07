const product = [
    {name:'shampoo', price:300,quantity:5  },
    {name:'soap',    price:100,quantity:3 },
    {name:'comb',    price:80 ,quantity:2 },
    {name:'bucket',  price:50 ,quantity:6 },
    {name:'shirt',   price:600,quantity:1 },

]

function totalCost(numbers){
let total = 0;

    for(const num of numbers){
        //    total += num.price * num.quantity;
        total = total + (num.price * num.quantity)
    }
    return total
}

const result = totalCost(product)
console.log(result);