const fs = require('fs');
const path = require('path');


fs.mkdir(path.join(__dirname, 'day3'), (err) => {
    if (err) {
        return console.log.error(err);
    }
    console.log('Directory created successsfully!');
});