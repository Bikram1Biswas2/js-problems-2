const product = [
    {name:'shampoo', price:300},
    {name:'soap', price:100},
    {name:'comb', price:80},
    {name:'bucket', price:50},
    {name:'shirt', price:600},

]

function totalCost(numbers){

    let count = 0;
    for(const num of numbers){
       if(num.price){
        count = count + num.price
       }
    }
    return count
}

const result = totalCost(product)
console.log(result);