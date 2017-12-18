import * as express from 'express';
import * as path from 'path';
import { Dao } from './dao';

const app = express();
const dao = new Dao();

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
    dao.connect().catch(error => {
        console.log(error);
        process.exit(1);
    });
}

// Run the app by serving the static files in the dist directory
app.use(express.static(path.join(__dirname + '/public')));

// Return all USERS
app.get('/api/users', (req, res) => {
    dao.getUsers(req, res);
});


// Return all TEAMS
app.get('/api/teams', (req, res) => {
    dao.getTeams(req, res);
});


// Return all SINGLES GAMES
app.get('/api/singles_games', (req, res) => {
    dao.getSinglesGames(req, res);
});


// Return all DOUBLES GAMES
app.get('/api/doubles_games', (req, res) => {
    dao.getDoublesGames(req, res);
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
