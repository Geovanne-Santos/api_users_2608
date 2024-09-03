import userRepositories from "../repositories/userRepositories.js";

async function insertUser(name, email) {
    if (!email || !name) throw { message: "E-mail e Nome obrigatório", status: 400 }
    try {
        return await userRepositories.insertUser(name, email);
    } catch (error) {
        let message = error.code == "ER_DUP_ENTRY" ? "E-mail já foi cadastrado" : error.message
        throw { message: message ?? "Erro no servidor", status: 400 }
    }
}

async function getUserById(id) {
    if (isNaN(id)) throw { message: "Id deve ser um número", status: 400 }

    try {
        const user = await userRepositories.getById(id);
        return user;
    } catch (error) {
        throw { message: error.message ?? "Erro no servidor", status: 500 }
    }
}

async function updateUser(id, name, email) {
    if (!email || !name) throw { message: "E-mail e Nome obrigatório", status: 400 }
    try {
        const userUpdated = await userRepositories.updateUser(id, name, email);
        return userUpdated;
    } catch (error) {
        throw { message: error.message ?? "Erro no servidor", status: 500 }
    }
}


export default {
    insertUser,
    getUserById,
    updateUser
} 