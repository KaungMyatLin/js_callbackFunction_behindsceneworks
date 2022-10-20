function add (x,y, cb) {
    var funcResult = function anyfunc(sth) {
        var result = x + y;
        return result;
    }()
    cb(funcResult);
}

add(10, 10, function(doit) {
    console.log(doit)
})

function multiply (x, y, cb) {
    let result = x * y;
    cb (result)
}

multiply(10, 10, function(doit) {
    console.log(doit)
})

function getData (id, cb) {
    var result = {
        data: 'this is some data'
        , id: id
    }

    cb("some err", result)
}

getData(123, (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})