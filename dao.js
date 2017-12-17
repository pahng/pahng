var pg = require('pg');
var client = new pg.Client({
    user: "lzndoxqpefxjsw",
    password: "86c5e658992d95f16fd9eebaf49de10fac4820ffcf36d8e004e1611d6676478a",
    database: "d3hrvgu0u1qf2l",
    port: 5432,
    host: "ec2-54-235-244-185.compute-1.amazonaws.com",
    ssl: true
});
client.connect();

module.exports = {
    getUsers: function(req, res) {    
        var query = client.query("SELECT * FROM users", function(err, results, fields) {
            if (err) throw err;
            console.log(results.rows);
        });
    }
}