const handlePromise = new Promise(function (resolve, reject){
    const resolvedPromise = () => {
        setTimeout(() => {
            let success = 'Delayed Success!';
            console.log(success);
        }, 500)
    }
    const rejectedPromise = () => {
        setTimeout(() => {
            let error = 'Delayed Error!';
            console.log(error);
        }, 500)
    }
    resolve(resolvedPromise());
    reject(rejectedPromise());
});


handlePromise.then(
    function(data){data},
    function(error){error}
)

