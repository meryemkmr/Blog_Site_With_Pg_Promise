-- CREATE TABLE categories(
--     id SERIAL  NOT NULL PRIMARY KEY,
--     title VARCHAR(50)
-- );


-- CREATE TABLE authors(
--     id SERIAL  NOT NULL PRIMARY KEY,
--     name VARCHAR(50),
--     bio VARCHAR(250),
--     imageURL varchar(150)
-- );


-- CREATE TABLE blogs(
--     id SERIAL  NOT NULL PRIMARY KEY,
--     title VARCHAR(50),
--     author integer REFERENCES authors(id),
--     category integer REFERENCES categories(id),
--     body varchar(500),
--     date DATE,
--     summary varchar(150)
-- );



-- INSERT INTO categories VALUES
-- (DEFAULT, 'CSS'),
-- (DEFAULT, 'HTML'),
-- (DEFAULT, 'PG-Promise'),
-- (DEFAULT, 'Node.js'),
-- (DEFAULT, 'JavaScript'),
-- (DEFAULT, 'Bootstrap'),
-- (DEFAULT, 'Python'),
-- (DEFAULT, 'C#'),
-- (DEFAULT, 'C++'),
-- (DEFAULT, 'Java'),
-- (DEFAULT, 'JQuery');