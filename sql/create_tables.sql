/* USERS */
CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    display_name VARCHAR(50),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    elo_score INTEGER,
    creation_time TIMESTAMP
);


/* TEAMS */ 
CREATE TABLE teams(
    id BIGSERIAL PRIMARY KEY,
    display_name VARCHAR(50),
    team_slogan VARCHAR(50),
    member_one INTEGER REFERENCES users(id),
    member_two INTEGER REFERENCES users(id),
    elo_score INTEGER,
    creation_time TIMESTAMP
);


/* SINGLES GAMES */
CREATE TABLE singles_games(
    id BIGSERIAL PRIMARY KEY,
    winning_player INTEGER REFERENCES users(id),
    losing_player INTEGER REFERENCES users(id),
    winning_score INTEGER,
    losing_score INTEGER,
    creation_time TIMESTAMP
);


/*  DOUBLES GAMES */
CREATE TABLE doubles_games(
    id BIGSERIAL PRIMARY KEY,
    winning_team INTEGER REFERENCES teams(id),
    losing_team INTEGER REFERENCES teams(id),
    winning_score INTEGER,
    losing_score INTEGER,
    creation_time TIMESTAMP
);