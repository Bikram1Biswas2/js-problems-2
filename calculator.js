function add(a,b){
    const addition = a+b;
   return addition;
}

function sub(a,b){
    const subtraction = a-b;
    return subtraction;
}

function multiply(a,b){
    const multiplication =a*b;
    return multiplication;
}
function divide(a,b){
    const division = a/b;
    return division
}

function calculator(a,b,condition){
    if(condition === 'add'){
        const ADD = add(a,b);
        return ADD;
    }else if(condition === 'sub'){
        const SUB = sub(a,b);
        return SUB
    }else if(condition === 'multiply'){
        const MULTIPLY = multiply(a,b)
        return MULTIPLY
    }else if(condition === 'divide'){
        const DIVIDE = divide(a,b)
        return DIVIDE
    }else {
        return 'Not applicable'
    }
}

const result = calculator(5,7,'multiply');
console.log(result);