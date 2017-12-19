import { Client } from 'pg';

export interface DaoConfig {
    connectionString: string;
    ssl: boolean;
}

export class Dao {
    private client: Client;

    constructor(private config: DaoConfig) {
        this.client = new Client(config);
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
