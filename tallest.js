const heights = [65, 66,67,68,69];

function minHeight(numbers){
let min = heights[0]
    for(const num of numbers){
        if(num<min){
            num = min
        }
    }
    return min
}

const min = minHeight(heights);
console.log(min);