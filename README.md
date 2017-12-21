# Pahng - https://pahng.herokuapp.com/

This project is a NodeJS backend app with an Angular frontend using the [Angular CLI](https://github.com/angular/angular-cli) version 1.6.1.

The available commands to run/build the app are:
- `npm run watch` - Runs both the backend and frontend in a dev server and will automatically reload if you make any changes to the source files. Navigate to `http://localhost:4200/`.
- `npm start` - Performs a production build and starts the Node application.
- `npm run build` - Performs a production build. The build artifacts will be stored in the `dist/` directory.
- `npm run serve` - Starts the Node application.
- `npm test` - Performs unit tests via [Karma](https://karma-runner.github.io).
- `npm run lint` - Performs ESLint.
- `npm run build:angular` - Builds the Angular app.
- `npm run build:server` - Builds the Node app.
- `npm run e2e` - Performs end-to-end tests via [Protractor](http://www.protractortest.org/).


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)

## Heroku Postgresql Database CLI Connection
`heroku pg:psql $DATABASE_URL`

## Local Postgresql Server
The project also include a docker-compose file which will start a Docker container running Postgresql
which will be pre-loaded with the tables necessary to run the app and has initial data loaded.
It is not the same database used in production but is meant to ease the development workflow. The tables
will be recreated each time that the container is restarted.

You can modify what the tables are by editing `/sql/create_tables.sql` and you can modify the data that
it is pre-loaded with by editing `/sql/data.sql`.

In order to run this container you will need to have [Docker](https://www.docker.com/) installed and [docker-compose](https://docs.docker.com/compose/) installed as well.

Once that is installed you can run these commands from the root directory of the project:
- `docker-compose up -d` - Starts the Docker container. (The `-d` flag is to put it in detached mode so that it does not output into your terminal)
- `docker-compose down` - Stops the Docker container.

## Set Environment Variable
You will also need to set the DATABASE_URL environment variable.
`export DATABASE_URL=postgresql://postgres:mysecretpassword@localhost:5432/postgres`
