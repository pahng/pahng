import { Client } from 'pg';

export interface DaoConfig {
    connectionString: string;
    ssl: boolean;
}

export class TeamsDao {
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

    public getTeams(req, res) {
        this.client.query('SELECT * FROM teams', (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results.rows);
        });
    }

    public createTeam(req, res) {
        let team_name = req.body.team_name;
        let team_slogan = req.body.team_slogan;
        let member_one = req.body.member_one;
        let member_two = req.body.member_two;

        if (team_name.length < 1 || team_slogan.length < 1 || member_one.length < 1 || member_two.length < 1) {
            res.send({'error': 'input field lengths must all be greater than 1 (for now)'})
        }

        this.client.query("INSERT INTO teams (display_name, team_slogan, member_one, member_two, elo_score, creation_time, update_time) VALUES ('" + team_name + "','" + team_slogan + "','" + member_one + "','" + member_two + "', 1500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)", (err, results) => {
            if (err) {
                res.send({'error': err});
            }
            res.send({'result': 'success', 'message': 'teams with display name "' + team_name + '" was created'});
        });
    }
}