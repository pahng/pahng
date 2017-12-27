import { Express, Router, Request, Response } from 'express';
import * as path from 'path';
import { Pool } from 'pg';
import { UsersDao } from './usersDao';
import { TeamsDao } from './teamsDao';
import { SinglesGamesDao } from './singlesGamesDao';
import { DoublesGamesDao } from './doublesGamesDao';

const BASE_URL = '/api';

export function setupRoutes(app: Express, pool: Pool) {
    setupSinglesGames(app, pool);
    setupDoublesGames(app, pool);
    setupTeams(app, pool);
    setupUsers(app, pool);
    setupDefault(app);
}

function setupSinglesGames(app: Express, pool: Pool) {
    const singlesGamesDao = new SinglesGamesDao(pool);
    app.use(`${BASE_URL}/singles_games`, singlesGamesDao.router);
}

function setupDoublesGames(app: Express, pool: Pool) {
    const doublesGamesDao = new DoublesGamesDao(pool);
    app.use(`${BASE_URL}/doubles_games`, doublesGamesDao.router);
}

function setupTeams(app: Express, pool: Pool) {
    const teamsDao = new TeamsDao(pool);
    app.use(`${BASE_URL}/teams`, teamsDao.router);

    // Set up deprecated route
    app.post(`${BASE_URL}/create_team`, (request: Request, response: Response) => {
        response.redirect(`${BASE_URL}/users`);
    });
}

function setupUsers(app: Express, pool: Pool) {
    const usersDao = new UsersDao(pool);
    app.use(`${BASE_URL}/users`, usersDao.router);

    // Set up deprecated route
    app.post(`${BASE_URL}/create_user`, (request: Request, response: Response) => {
        response.redirect(`${BASE_URL}/users`);
    });
}

function setupDefault(app: Express) {
    // For all other GET requests, send back index.html
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}
