const initDatabase = async (client) => {
    try {
      // Read the SQL file
      console.log("comes here nice");
      const sqlFilePath = path.resolve(__dirname, 'database.sql');
      const sqlContent = fs.readFileSync(sqlFilePath, 'utf8');
  
      // Split the content into individual SQL statements
      const sqlStatements = sqlContent.split(';').filter(statement => statement.trim());
  
      // Execute each SQL statement
      for (const statement of sqlStatements) {
        await client.query(statement);
      }
  
      console.log('Database initialization successful');
    } catch (error) {
      console.error('Error initializing the database:', error);
    }
  };
  
module.exports = initDatabase;
  