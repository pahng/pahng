import { Client } from 'pg';

export interface DaoConfig {
    connectionString: string;
    ssl: boolean;
}

export class UsersDao {
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

    public getUsers(req, res) {
        this.client.query('SELECT * FROM users', (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results.rows);
        });
    }

    public createUser(req, res) {
        let display_name = req.body.display_name;
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let password = req.body.password;

        if (display_name.length < 1 || first_name.length < 1 || last_name.length < 1 || password.length < 1) {
            res.send({'error': 'input field lengths must all be greater than 1 (for now)'})
        }

        this.client.query("INSERT INTO users (display_name, first_name, last_name, elo_score, creation_time, update_time) VALUES ('" + display_name + "','" + first_name + "','" + last_name + "', 1500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)", (err, results) => {
            if (err) {
                res.send({'error': err});
            }
            res.send({'result': 'success', 'message': 'user with display name "' + display_name + '" was created'});
        });
    }
}
