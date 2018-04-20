let dupl = require('../index');
let arr = Array
    .apply(null, Array(100))
    .map(function () {
        return parseInt(10 * Math.random())
    });
    console.time('dupl');
    let result= dupl.remove(arr);
    // console.log(result)

    console.timeEnd('dupl');
    let a=dupl.get(arr)

