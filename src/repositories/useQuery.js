/* 
import { getConnection } from "../repositories/conn.js";


export async function query(statement, values) {
    const conn = await getConnection();
    try {
        return new Promise((resolve, reject) => {
            if (!values) {
                conn.query(statement, async function (error, results) {
                    if (error) reject(error);
                    
                    resolve(results);
                    conn.end();
                });
            }
            conn.query(statement, values, async function (error, results) {
                if (error) reject(error);
                
                resolve(results);
                conn.end();
                
            });
        })
    } catch (error) {
        throw error;
    }
} */


    import { getConnection } from "../repositories/conn.js";

export async function query(statement, values) {
    const pool = getConnection();
    
    try {
        const [results] = await pool.query(statement, values);
        return results;
    } catch (error) {
        throw error;
    }
}
