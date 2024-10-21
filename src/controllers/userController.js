import { createUser, getAllUsers, updateUser, deleteUser } from '../services/userService'

export const createUserController = async (req, res) => {
    try {
        const user = await createUser(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar usuário" })
    }
}

export const getAllUsersController = async (req, res) => {
    try {
        const users = await getAllUsers(req.query)
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: "Erro ao obter usuários" })
    }
}

export const updateUserController = async (req, res) => {
    try {
        const user = await updateUser(req.params.id, req.body)
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" })
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar usuário" })
    }
}

export const deleteUserController = async (req, res) => {
    try {
        const result = await deleteUser(req.params.id)
        if (!result) {
            return res.status(404).json({ message: "Usuário não encontrado" })
        }
        res.status(200).json({ message: "Usuário deletado com sucesso" })
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar usuário" })
    }
}
