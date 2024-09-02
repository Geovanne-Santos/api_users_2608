
import { getConnection } from "../repositories/conn.js";


export async function query(statement, values) {
    const conn = await getConnection();
    try {
        return new Promise((resolve, reject) => {
            if (!values) {
                conn.query(statement, async function (error, results, fields) {
                    conn.end();
                    if (error) reject(error);
                    
                    resolve(results);
                });
            }
            conn.query(statement, values, async function (error, results, fields) {
                conn.end();
                if (error) reject(error);
                
                resolve(results);
            });
        })
    } catch (error) {
        throw error;
    }
}