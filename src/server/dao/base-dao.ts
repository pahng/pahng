import { Response, Request, NextFunction, Router } from 'express';
import { Pool } from 'pg';

export abstract class BaseDao {
    public router = Router();

    protected abstract get defaultTableName(): string;

    constructor(protected pool: Pool) {
        this.setupRoutes();
    }

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

    public abstract get put(): (request: Request, response: Response, next: NextFunction) => any;

    public abstract get post(): (request: Request, response: Response, next: NextFunction) => any;

    public abstract get delete(): (request: Request, response: Response, next: NextFunction) => any;

    protected setupRoutes(): void {
        this.router.route('/').get(this.get).post(this.post);
        this.router.route('/:id').get(this.get).put(this.put).delete(this.delete);
    }
}
