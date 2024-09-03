import { Router } from "express";
import { query } from "../repositories/useQuery.js";
import userServices from "../services/userServices.js";


const userController = Router();

userController.get("/", async (req, res) => {
    try {
        const sql = await query("select * from users");
        res.send(sql);
    } catch (error) {
        throw error;
    }
})

userController.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const sql = await userServices.getUserById(id);
        res.send(sql);
    } catch (error) {
        throw error;
    }
})


userController.post("/", async (req, res) => {
    const { name, email } = req.body;
    try {
        const response = await userServices.insertUser(name, email)
        res.send(response);
    } catch (error) {
        res.status(error.status).send({ message: error.message });
    }
})

userController.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const response = await userServices.updateUser(Number(id), name, email)
        res.send(response);
    } catch (error) {
        res.status(error.status).send({ message: error.message });
    }
})



export { userController };