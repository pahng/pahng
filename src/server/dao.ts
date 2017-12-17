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

    public async getUsers(req, res) {
        const { rows } = await this.client.query('SELECT * FROM users');
        res.send(rows);
    }

    public async getTeams(req, res) {
        const { rows } = await this.client.query('SELECT * FROM teams');
        res.send(rows);
    }

    public async getSinglesGames(req, res) {
        const { rows } = await this.client.query('SELECT * FROM singles_games');
        res.send(rows);
    }

    public async getDoublesGames(req, res) {
        const { rows } = await this.client.query('SELECT * FROM doubles_games');
        res.send(rows);
    }
}
