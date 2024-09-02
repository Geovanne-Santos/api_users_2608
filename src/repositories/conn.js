import mysql from "mysql2";


async function getConnection () {
    let pool;
    
    if (pool == null) {
        pool = mysql.createPool({
            connectionLimit: 10,
            host: 'localhost',
            database: 'usersdb',
            user: 'root',
            password: 'root'
        });
    }    
    
    return pool;
} 

export { getConnection };
