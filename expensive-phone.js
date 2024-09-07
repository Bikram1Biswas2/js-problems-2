const phones = [
    {name:'oppo', price:20000, camera:'12mp', color:'white'},
    {name:'vivo', price:16000, camera:'12mp', color:'white'},
    {name:'Samsung', price:120000, camera:'12mp', color:'white'},
    {name:'iPhone', price:80000, camera:'12mp', color:'white'},
    {name:'poco', price:25000, camera:'12mp', color:'white'},
    {name:'Nothing', price:40000, camera:'12mp', color:'white'}
]

function findExpensivePhone(numbers){

    let max = numbers[0]

    for(const num of numbers){
        if(num.price > max.price){
           max = num ;
        }
    }
    return max;
}

const expensive = findExpensivePhone(phones);
console.log(expensive);