import { Response, Request, NextFunction, Router } from 'express';
import { Client } from 'pg';
import { BaseDao } from './base-dao';

/**
 * Concrete implementation of the BaseDoa class which provides access to the Teams
 * DB table.
 */
export class TeamsDao extends BaseDao {

    /**
     * The base table this DAO uses.
     *
     * @protected
     * @return {string}
     */
    protected get defaultTableName() {
        return 'teams';
    }

    /**
     * Property to retrieve this DAO's POST request implementation. It returns a function
     * which takes the Express Route params and returns a Promise.
     *
     * @public
     * @return {(request: , response: , next: ) => Promise<any>}
     */
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

    /**
     * Property to retrieve this DAO's PUT request implementation. It returns a function
     * which takes the Express Route params and returns a Promise.
     *
     * @public
     * @return {(request: , response: , next: ) => Promise<any>}
     */
    public get put() {
        return async (request: Request, response: Response, next: NextFunction) => {
            response.send({ error: 'Not implemented yet.' });
        };
    }

    /**
     * Property to retrieve this DAO's DELETE request implementation. It returns a function
     * which takes the Express Route params and returns a Promise.
     *
     * @public
     * @return {(request: , response: , next: ) => Promise<any>}
     */
    public get delete() {
        return async (request: Request, response: Response, next: NextFunction) => {
            response.send({ error: 'Not implemented yet.' });
        };
    }

    /**
     * Sets up the nested routes in this DAO and assigns them to the Router.
     *
     * @protected
     * @return {void}
     */
    protected setupRoutes(): void {
        super.setupRoutes();
        // Deprecated, kept for backwards compatibility
        this.router.route('/create_team').post(this.post);
    }
}
