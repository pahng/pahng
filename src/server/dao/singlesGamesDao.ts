import { Client } from 'pg';

export interface DaoConfig {
    connectionString: string;
    ssl: boolean;
}

export class SinglesGamesDao {
    private client: Client;

    constructor(private config: DaoConfig) {
        this.client = new Client(config);
        this.connect().catch(error => {
            console.log(error);
        });
    }

    public async connect() {
        await this.client.connect();
    }

    public getSinglesGames(req, res) {
        this.client.query('SELECT * FROM singles_games', (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results.rows);
        });
    }
}
