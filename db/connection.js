var pg = require('pg');

var pool = new pg.Pool({
    database: 'tech_cbt'
});

module.exports = pool;
