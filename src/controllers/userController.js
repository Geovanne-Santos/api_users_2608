import { Router } from "express";
import { getConnection } from "../repositories/conn.js";
import { query } from "../repositories/useQuery.js";


const userController = Router();

userController.get("/", async (req, res) => {
    try {
        const sql = await query("select * from users");
        res.send(sql);
    } catch (error) {
        throw error;
    }
})

userController.post("/", (req, res) => {
    const { name, email } = req.body;

    const statement = "Insert into users (name, email) values (?, ?)";
    const sql = query(statement, [name, email]);

    res.send(sql);
})



export { userController };