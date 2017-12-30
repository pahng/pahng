import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { Pool } from 'pg';
import { setupRoutes } from './dao';

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

// Create the DB Pool
const pool = new Pool(daoConfig);

// Run the app by serving the static files in the dist directory
app.use(express.static(path.join(__dirname + '/public')));

// Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json());

// Setup all routes
setupRoutes(app, pool);

// Start the app by listening on the default Heroku port
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(('  App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});
