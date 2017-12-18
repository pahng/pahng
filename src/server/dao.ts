import { Client } from 'pg';

export class Dao {
    private client: Client;

    constructor() {
        this.client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true
        });
    }

    public async connect() {
        await this.client.connect();
    }

    public getUsers(req, res) {
        this.client.query('SELECT * FROM users', (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results.rows);
        });
    }

    public getTeams(req, res) {
        this.client.query('SELECT * FROM teams', (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results.rows);
        });
    }

    public getSinglesGames(req, res) {
        this.client.query('SELECT * FROM singles_games', (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results.rows);
        });
    }

    public getDoublesGames(req, res) {
        this.client.query('SELECT * FROM doubles_games', (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results.rows);
        });
    }
}
