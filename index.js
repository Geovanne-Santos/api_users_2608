import express from "express";
import {userController} from "./src/controllers/userController.js";


const app = express();
const port = 3003;
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Oi")
})

app.use("/user", userController);

app.listen(port, () => {
    console.log(`Listen on localhost:${port}`);
});
