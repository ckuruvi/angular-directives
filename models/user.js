var pool = require("../db/connection");

exports.getEmployees = function() {
    return query(
            "SELECT * FROM users;"
        ).then(function(list) {
            return list;
        })
        .catch(function(err) {
            console.log('error getting employee list', err);
        })
}

exports.getEmployeeById = function(empno) {
    return query(
        "SELECT * FROM users where empno=$1;", [empno]
    ).then(function(emp) {
        return emp;
    }).catch(function(err) {
        console.log('error getting employee', err);
    });
}

function query(sqlString, data) {
    return new Promise(function(resolve, reject) {
        pool.connect(function(err, client, done) {
            try {
                if (err) {
                    return reject(err);
                }
                client.query(sqlString, data, function(err, result) {
                    if (err) {
                        return reject(err);
                    }
                    resolve(result.rows);
                });
            } finally {
                done();
            }
        });
    });
}
