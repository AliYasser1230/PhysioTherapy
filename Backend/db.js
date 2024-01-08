const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    password: "MyDatabase",
    host: "localhost",
    port: 5432,
    database: "Physiotherapy"
});

// Connection successful message
pool.connect()
    .then(() => {
        console.log('Connected to the database successfully');
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err.message);
    });

module.exports = pool;
