import userModel from "../models/user.model.js";

const getAllUsers = async (req, res, next) => {
    const allUsers = await userModel.find({});
    if(allUsers) return res.status(200).json({message: 'success', response: allUsers })

}

const createUser = async (req, res, next) => {
    try {
        const userExists = await userModel.findOne({email: req.body.email})
        userExists && res.status(400).json({success: false, message: 'user with email exists.', data: null})
    
        const newUser = await userModel.create(req.body);
        if(!userExists)return res.status(200).json({success: true, message: 'User created successfully.', data: newUser})
    
        // res.status(200).json({message: 'success', response: allUsers })
    } catch (e) {
        console.log(e);
        return res.status(500).json({success: false, message: e.message, data: null})
    }

}

const updateUser = async (req, res, next) => {

    try {
    
        const userExists = await userModel.findOne({_id: req.params.id});
        if(!userExists) return res.status(400).json({success: false, message: 'User doesn\'nt exist.', data: null})
    
        const updatedUser = await userModel.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: false, new: true})
        if(updatedUser) return res.status(200).json({success: true, message: 'User updated successfully.', data: updatedUser})
        console.log('user exists, user updated');
    
        if(!updatedUser) return res.status(500).json({success: false, message: 'User not updated.', data: null})
        console.log('user exists, user not updated')

    } catch (e) {
        console.log(e);
        return res.status(500).json({success: false, message: e.message, data: null})

    }
}

const deleteUser = async (req, res, next) => {
    try {
        await userModel.findOneAndDelete({_id: req.params.id});
        res.status(200).json({success: true, message: 'User deleted.', data: null})
    } catch (e) {
        res.status(400).json({success: false, message: e.message, data: null})
    }

}

const getUserById = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.params.id);
        if(user) res.status(200).json({success: true, message: 'User matched.', data: user})

        if(!user) res.status(200).json({success: true, message: 'User not found.', data: null});

    } catch (e) {
        res.status(400).json({success: false, message: e.message, data: null})
    }

}

export {getAllUsers, createUser, updateUser, deleteUser, getUserById};