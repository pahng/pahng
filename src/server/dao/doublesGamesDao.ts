import { Response, Request, NextFunction, Router } from 'express';
import { Client } from 'pg';
import { BaseDao } from './base-dao';

/**
 * Concrete implementation of the BaseDoa class which provides access to the Doubles
 * Games DB table.
 */
export class DoublesGamesDao extends BaseDao {

    /**
     * The base table this DAO uses.
     *
     * @protected
     * @return {string}
     */
    protected get defaultTableName() {
        return 'doubles_games';
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
     * Property to retrieve this DAO's POST request implementation. It returns a function
     * which takes the Express Route params and returns a Promise.
     *
     * @public
     * @return {(request: , response: , next: ) => Promise<any>}
     */
    public get post() {
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
}
