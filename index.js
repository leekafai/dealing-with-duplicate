let miniWorker = (data) => {
    return new Promise((resolve, reject) => {
        resolve([...new Set(data)])
    })
}
let remove = (data) => {
    // if (data.length > 5000) {
    //     // console.log(data.length)
    //     let workerList = [
    //         miniWorker(data.slice(0, data.length / 2)),
    //         miniWorker(data.slice(data.length / 2, data.length))
    //     ]
    //     Promise
    //         .all(workerList)
    //         .then(function (results) {
    //             console.log('res')
    //             return data
    //         });
    // return [...new Set(data.slice(0, data.length / 2), ...new Set(data.slice(data.length / 2, data.length)))]
    // } else {
    //     return [...new Set(data)];
    // }
    return [...new Set(data)];

}
let get=(data)=>{
    let item=[];
    while(data.length>0){
        item.push(data.pop());
        console.log(1)
    }
    while(item.length>0){
        item.pop()
        console.log(2)
    }
    // return item;
}
module.exports.remove = remove;
module.exports.get = get;