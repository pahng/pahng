const pg = require('pg');
const client = new pg.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});
client.connect();


module.exports = {
    getUsers: function(req, res) {    
        const query = client.query("SELECT * FROM users", function(err, results, fields) {
            if (err) throw err;
            res.send(results.rows);
        });
    },

    getTeams: function(req, res) {    
        const query = client.query("SELECT * FROM teams", function(err, results, fields) {
            if (err) throw err;
            res.send(results.rows);
        });
    },
    
    getSinglesGames: function(req, res) {    
        const query = client.query("SELECT * FROM singles_games", function(err, results, fields) {
            if (err) throw err;
            res.send(results.rows);
        });
    },

    getDoublesGames: function(req, res) {    
        const query = client.query("SELECT * FROM doubles_games", function(err, results, fields) {
            if (err) throw err;
            res.send(results.rows);
        });
    }
}