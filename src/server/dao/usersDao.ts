import { Response, Request, NextFunction, Router } from 'express';
import { Client } from 'pg';
import { BaseDao } from './base-dao';

export class UsersDao extends BaseDao {

    protected get defaultTableName() {
        return 'users';
    }

    public get post() {
        return async (request: Request, response: Response, next: NextFunction) => {
            const { display_name, first_name, last_name, password } = request.body;
            const query = `INSERT INTO users (display_name, first_name, last_name, elo_score, creation_time, update_time)
            VALUES ('${display_name}', '${first_name}', '${last_name}', 1500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`;

            if (display_name.length < 1 || first_name.length < 1 || last_name.length < 1 || password.length < 1) {
                response.send({ error: 'input field lengths must all be greater than 1 (for now)' });
            }

            return this.pool.query(query)
                .then(() => response.send({ result: 'success', message: `User with display name ${display_name} was created` }))
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
        this.router.route('/create_user').post(this.post);
    }
}
