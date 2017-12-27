import { Response, Request, NextFunction, Router } from 'express';
import { Client } from 'pg';
import { BaseDao } from './base-dao';

export class DoublesGamesDao extends BaseDao {
    protected get defaultTableName() {
        return 'doubles_games';
    }

    public get put() {
        return async (request: Request, response: Response, next: NextFunction) => {
            response.send({ error: 'Not implemented yet.' });
        };
    }

    public get post() {
        return async (request: Request, response: Response, next: NextFunction) => {
            response.send({ error: 'Not implemented yet.' });
        };
    }

    public get delete() {
        return async (request: Request, response: Response, next: NextFunction) => {
            response.send({ error: 'Not implemented yet.' });
        };
    }
}
