import * as express from 'express';
import * as path from 'path';
import { UsersDao } from './dao/usersDao';
import { TeamsDao } from './dao/teamsDao';
import { SinglesGamesDao } from './dao/singlesGamesDao';
import { DoublesGamesDao } from './dao/doublesGamesDao';
var bodyParser = require('body-parser')


const daoConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: false,
};

const app = express();


// If an incoming request uses a protocol other than HTTPS,
// redirect that request to the same url but with HTTPS
const forceSSL = () => {
    return (req, res, next) => {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(['https://', req.get('Host'), req.url].join(''));
        }
        next();
    };
};


// Instruct the app to use the forceSSL middleware
if (process.env.NODE_ENV === 'production') {
    app.use(forceSSL());
    daoConfig.ssl = true;
}


// Entity DAOs
const usersDao = new UsersDao(daoConfig);
const teamsDao = new TeamsDao(daoConfig);
const singlesGamesDao = new SinglesGamesDao(daoConfig);
const doublesGamesDao = new DoublesGamesDao(daoConfig);


// Run the app by serving the static files in the dist directory
app.use(express.static(path.join(__dirname + '/public')));


// Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json())


// Return all USERS
app.get('/api/users', (req, res) => {
    usersDao.getUsers(req, res);
});


// Return all TEAMS
app.get('/api/teams', (req, res) => {
    teamsDao.getTeams(req, res);
});


// Return all SINGLES GAMES
app.get('/api/singles_games', (req, res) => {
    singlesGamesDao.getSinglesGames(req, res);
});


// Return all DOUBLES GAMES
app.get('/api/doubles_games', (req, res) => {
    doublesGamesDao.getDoublesGames(req, res);
});


// Create new USER
app.post('/api/create_user', (req, res) => {
    let display_name = req.body.display_name;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let password = req.body.password;

    if (display_name.length < 1 || first_name.length < 1 || last_name.length < 1 || password.length < 1) {
        res.send({'error': 'input field lengths must all be greater than 1 (for now)'})
    }
    else {
        usersDao.createUser(display_name, first_name, last_name, password, res);
    }
});


// For all GET requests, send back index.html so that PathLocationStrategy can be used
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


// Start the app by listening on the default Heroku port
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(('  App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});
