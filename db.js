const { Pool } = require('pg');

const pool = new Pool({
    host: 'aws-0-ap-south-1.pooler.supabase.com',
    user: 'postgres.pwmyzjakquansgufouyw',
    password: '/VUUc25h_BQZmg5',
    database: 'postgres',
    port: 5432
});

module.exports = pool;