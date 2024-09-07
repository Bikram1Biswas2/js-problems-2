function maxMost(num1, num2, num3){
    if(num1>num2 && num1>num3){
        return `num1 is greater ,${num1}`
    }else if(num2>num1 && num2>num3){
        return `num2 is greater, ${num2}`
    }else{
        return `num3 is greater , ${num3}`  }
}

const kim = 100;
const jim = 200;
const lim = 50;

const maxNumber = maxMost(kim,jim,lim);
console.log(maxNumber);