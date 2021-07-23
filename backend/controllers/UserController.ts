import express from 'express'
import {userModel} from "../models/UserModel";
import {validationResult} from "express-validator";
import {generateMD5} from "../utils/generateHash";
import {sendEmail} from "../utils/sendEmail";

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
                password: req.body.password,
                confirmHash: generateMD5(process.env.SECRET_KEY ||Math.random().toString())
            }

            const user = await userModel.create(data)

            sendEmail({
                emailFrom: "admin@test.com",
                emailTo: data.email,
                subject: "Подтверждение почты Twitter Clone Tutorial",
                html: `Для того, чтобы подтвердить почту, перейдите <a href="http://localhost:${process.env.PORT || 8888}/users/verify?hash=${data.confirmHash}">по этой ссылке</a>`,
            },
                (err: Error | null) => {
                if(err) {
                    res.json({
                        status: 'error',
                        message: JSON.stringify(err)
                    })
                } else {
                    res.json({
                        status: 'success',
                        data: user
                    })
                }
            })

        } catch (error) {
            res.json({
                status: 'error',
                message: JSON.stringify(error)
            })
        }
    }
}

export const userCtrl = new UserController()