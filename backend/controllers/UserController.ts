import express from 'express'
import {userModel} from "../models/UserModel";

class UserController {
    async index(req: express.Request, res: express.Response): Promise<void> {
        try {
            const users = await userModel.find({}).exec()

            res.json({
                status: 'success',
                data: users
            })
        } catch(error) {
            res.json({
                status: 'error',
                message: JSON.stringify(error)
            })
        }
    }

    async create(req: express.Request, res: express.Response){
        try {

        } catch (error) {

        }
    }
}

export const userCtrl = new UserController()