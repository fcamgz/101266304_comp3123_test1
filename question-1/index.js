const lowerCaseWords = new Promise(function(resolve, reject) {
    let mixedArray = ['PIZZA', 10, true, 25, false, 'Wings', 10];
    let filtered = mixedArray.filter(value => typeof value === 'string').map(value => value.toLowerCase());
    resolve('Result: ' + filtered); // when successful
    reject('Error');  // when error
})

lowerCaseWords.then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
);