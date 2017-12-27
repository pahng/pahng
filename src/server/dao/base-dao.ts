import { Response, Request, NextFunction, Router } from 'express';
import { Pool } from 'pg';

/**
 * Base class to be used by all DAO which provides the default implementation
 * and structure for making CRUD operations.
 *
 * This is an abstract class and must be subclassed in order to provide a concrete implementation.
 */
export abstract class BaseDao {

    /**
     * The router used by the DAO to forward routes to specific functions.
     *
     * @public
     * @type {Router}
     */
    public router = Router();

    /**
     * The base table this DAO uses.
     *
     * @protected
     * @return {string}
     */
    protected abstract get defaultTableName(): string;

    /**
     * Constructs a new instance of this DAO and assigns the global PG.Pool to it.
     * It then sets up all of it's routes.
     *
     * @public
     * @param {Pool} pool - The global PG.Pool to use for making DB queries
     */
    constructor(protected pool: Pool) {
        this.setupRoutes();
    }

    /**
     * Property to retrieve this DAO's GET request implementation. It returns a function
     * which takes the Express Route params and returns a Promise.
     *
     * This is the default implementation which just retrieves a single entity by ID from
     * the DAO's default table when called with an <id> request param or returns all entities
     * and rows from the default table.
     *
     * @public
     * @return {(request: , response: , next: ) => Promise<any>}
     */
    public get get() {
        return async (request: Request, response: Response, next: NextFunction) => {
            if (request.params.id) {
                return this.pool.query(`SELECT * FROM ${this.defaultTableName} WHERE id = $1`, [request.params.id])
                    .then((results) => response.send(results.rows))
                    .catch(error => response.send({ error }));
            } else {
                return this.pool.query(`SELECT * FROM ${this.defaultTableName}`)
                    .then((results) => response.send(results.rows))
                    .catch(error => response.send({ error }));
            }
        };
    }

    /**
     * Property to retrieve this DAO's PUT request implementation. It returns a function
     * which takes the Express Route params and returns a Promise.
     *
     * This is an abstract property and must be implemented in a subclass.
     *
     * @public
     * @return {(request: , response: , next: ) => Promise<any>}
     */
    public abstract get put(): (request: Request, response: Response, next: NextFunction) => Promise<any>;

    /**
     * Property to retrieve this DAO's POST request implementation. It returns a function
     * which takes the Express Route params and returns a Promise.
     *
     * This is an abstract property and must be implemented in a subclass.
     *
     * @public
     * @return {(request: , response: , next: ) => Promise<any>}
     */
    public abstract get post(): (request: Request, response: Response, next: NextFunction) => Promise<any>;

    /**
     * Property to retrieve this DAO's DELETE request implementation. It returns a function
     * which takes the Express Route params and returns a Promise.
     *
     * This is an abstract property and must be implemented in a subclass.
     *
     * @public
     * @return {(request: , response: , next: ) => Promise<any>}
     */
    public abstract get delete(): (request: Request, response: Response, next: NextFunction) => Promise<any>;

    /**
     * Sets up the nested routes in this DAO and assigns them to the Router.
     *
     * @protected
     * @return {void}
     */
    protected setupRoutes(): void {
        this.router.route('/').get(this.get).post(this.post);
        this.router.route('/:id').get(this.get).put(this.put).delete(this.delete);
    }
}
