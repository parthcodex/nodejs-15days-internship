var mypromise = new Promise(function(resolve, reject) {
    const x = 100;
    const y = 100;
    if (x == y) {
        resolve();
    } else {
        reject();
    }
});


mypromise.then(function() {
    console.log('Success');
}).catch(function() {
    console.log('Error');
});