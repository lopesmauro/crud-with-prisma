import User from '../models/userModel'

export const createUser = async (data) => {
    return await User.create({ data })
}

export const getAllUsers = async (filter) => {
    return await User.findMany({ where: filter })
}

export const updateUser = async (id, data) => {
    return await User.update({ where: { id }, data })
}

export const deleteUser = async (id) => {
    return await User.delete({ where: { id } })
}
