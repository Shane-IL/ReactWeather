// function getTempCallback(location, callback){
//     callback(undefined, 40);
//     callback("City not found");
// }
//
// getTempCallback("Tel Aviv", function(err, temp){
//     if(err){
//         console.log('error', err);
//     }
//     else{
//         console.log("success", temp);
//     }
// })
//
// function getTempPromise(location){
//     return new Promise(function(resolve, reject){
//         resolve(41);
//         reject('City Not Found');
//     });
// }
//
// getTempPromise('Tel Aviv').then(function(temp){
//     console.log("promise success", temp);
// }, function(err){
//     console.log('promise error', err);
// })

function addPromise (a,b){
    return new Promise(function(resolve, reject){
        const sum = a+b;
        if (isNaN(sum)) {
            reject("Numbers only bi-atch!");
        }
        else{
            resolve(a+b);
        }
    })
}

addPromise(3, 5).then(function(sum){
    console.log(sum);
}, function(err){
    console.log(err);
});

addPromise(3, "blabla").then(function(sum){
    console.log(sum);
}, function(err){
    console.log(err);
});
