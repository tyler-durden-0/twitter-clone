import express from 'express'
import {userModel} from "../models/UserModel";
import {validationResult} from "express-validator";

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

    async create(req: express.Request, res: express.Response): Promise<void>{
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                res.status(400).json({status: 'error', errors: errors.array()})
                return
            }

            const data = {
                email: req.body.email,
                username: req.body.username,
                fullname: req.body.fullname,
                password: req.body.password
            }

            const user = await userModel.create(data)

            res.json({
                status: 'success',
                data: user
            })
        } catch (error) {

        }
    }
}

export const userCtrl = new UserController()