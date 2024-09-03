import { query } from "../repositories/useQuery.js";

async function getById(id) {
    try {
        const statement = "SELECT * FROM users WHERE id = ?";
        const sql = await query(statement, [id]);
        return sql[0];
    } catch (error) {
        throw error;
    }
}

async function insertUser(name, email) {
    try {
        const statement = "Insert into users (name, email) values (?, ?)";
        const sql = await query(statement, [name, email]);
        return sql;
    } catch (error) {
        throw error;
    }
}

async function updateUser(id, name, email) {
    try {
        const statement = "UPDATE users SET name = ?, email = ? WHERE id = ?";
        const sql = await query(statement, [name, email, id]);
        return sql;
    } catch (error) {
        throw error;
    }
}

export default {
    getById,
    insertUser,
    updateUser
}