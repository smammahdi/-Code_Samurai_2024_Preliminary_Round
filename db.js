const { Pool } = require('pg');
const initDatabase = require('./initiate_database');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'MetroDB',
    port: 5432
});

pool.connect((err, client, done) => {
    console.log("here here db.js")
    if (err) {
      console.error('Error connecting to the database:', err);
      process.exit(1);
    }

    // Call the initialization script with the database client
    initDatabase(client);
  
    // Release the client back to the pool
    done();
  });


module.exports = pool;