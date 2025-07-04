function countTruthy(array){
    let count = 0;
    for(let value of array){
        if(value){
            count++;
        }
    }
    return count;
}