var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_nodejs_crud',

});

db.connect(function(err) {
    if (!err) {
        console.log("DB connected");
    } else {
        console.log("DB connection issue");
    }
})

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.get('/add', function(req, res, next) {
    res.render('form', { title: 'Express' });
});


router.post('/add-process', function(req, res, next) {
    console.log(req.body);

    const mydata = {
        name: req.body.Name,
        price: req.body.Price
    }


    db.query("insert into tb_book set ?", mydata, function(err, result) {
        if (err) throw err;
        console.log(mydata)
        res.redirect('/add')
    });
});

router.get('/select', function(req, res, next) {


    db.query("select * from tb_book", function(err, db_rows) {
        if (err) throw err;
        console.log(db_rows);
        res.render('select', { db_rows_array: db_rows });


    });
});

router.get('/delete', function(req, res, next) {
    db.query('delete from tb_book where id = ?', req.query.id, function(err, rs) {
        res.redirect('/select');
    })
})

// router.get('/edit/:id', function(req, res, next) {
//     var editid = req.params.id;
//     console.log(editid);
//     db.query('select * from tb_book where id = ?', [editid], function(err, rs) {
//         if (err) throw err;
//         console.log(db_rows);
//         res.render('edit', { db_rows_array: db_rows });
//     });
// });

// router.post('/edit/:id', function(req, res, next) {
//     var editid = req.params.id;
//     var bname = req.body.name;
//     var bprice = req.body.price;
//     db.query('update tb_book set name = ?,price=? where id=?', [bname, bprice, editid], function(err, rs) {
//         if (err) throw err;
//         console.log(db_rows);
//         res.redirect('/select')
//     });
// });


module.exports = router;