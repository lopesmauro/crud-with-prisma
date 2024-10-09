import { createUser, getAllUsers, updateUser, deleteUser } from '../services/userService';

export const createUserController = async (req, res) => {
    const user = await createUser(req.body);
    res.status(201).json(user);
};

export const getAllUsersController = async (req, res) => {
    const users = await getAllUsers(req.query);
    res.status(200).json(users);
};

export const updateUserController = async (req, res) => {
    const user = await updateUser(req.params.id, req.body);
    res.status(200).json(user);
};

export const deleteUserController = async (req, res) => {
    await deleteUser(req.params.id);
    res.status(200).json({ message: "usuário deletado com sucesso" });
};
