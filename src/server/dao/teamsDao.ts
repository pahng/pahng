import { Response, Request, NextFunction, Router } from 'express';
import { Client } from 'pg';
import { BaseDao } from './base-dao';

export class TeamsDao extends BaseDao {

    protected get defaultTableName() {
        return 'teams';
    }

    public get post() {
        return async (request: Request, response: Response, next: NextFunction) => {
            const { team_name, team_slogan, member_one, member_two } = request.body;
            const query = `INSERT INTO teams (display_name, team_slogan, member_one, member_two, elo_score, creation_time, update_time)
            VALUES ('${team_name}', '${team_slogan}', ${member_one}, ${member_two}, 1500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`;

            if (team_name.length < 1 || team_slogan.length < 1 || member_one.length < 1 || member_two.length < 1) {
                response.send({ error: 'input field lengths must all be greater than 1 (for now)'});
            }

            return this.pool.query(query)
                .then(() => response.send({ result: 'success', message: `Team with display name ${team_name} was created` }))
                .catch(error => response.send({ error }));
        };
    }

    public get put() {
        return async (request: Request, response: Response, next: NextFunction) => {
            response.send({ error: 'Not implemented yet.' });
        };
    }

    public get delete() {
        return async (request: Request, response: Response, next: NextFunction) => {
            response.send({ error: 'Not implemented yet.' });
        };
    }

    protected setupRoutes(): void {
        super.setupRoutes();
        // Deprecated, kept for backwards compatibility
        this.router.route('/create_team').post(this.post);
    }
}
