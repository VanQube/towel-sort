
// You should implement your task here.
module.exports = function towelSort (matrix) {
    let new_arr = []
    for (let elem in matrix) {
        if (elem%2==0) {
            new_arr = new_arr.concat(matrix[elem])
        } else {
            let odd = [];
            odd += matrix[elem]
            odd = odd.split(',').reverse();
            odd = odd.map(elem => +elem)
            new_arr = new_arr.concat(odd);
        }
    } return new_arr
}
