import express from 'express'
import mongoose from 'mongoose'
import {userModel} from "../models/UserModel";
import {validationResult} from "express-validator";
import {generateMD5} from "../utils/generateHash";
import {sendEmail} from "../utils/sendEmail";

const isValidObjectId = mongoose.Types.ObjectId.isValid

class UserController {
    async index(res: express.Response): Promise<void> {
        try {
            const users = await userModel.find({}).exec()

            res.json({
                status: 'success',
                data: users
            })
        } catch(error) {
            res.status(500).json({
                status: 'error',
                message: error
            })
        }
    }

    async show(req: any, res: express.Response): Promise<void> {
        try {
            const userId = req.params.id

            if(!isValidObjectId(userId)) {
                res.status(400).send()
                return
            }

            const user = await userModel.findById(userId).exec()

            if(!user) {
                res.status(404).send()
                return
            }

            res.json({
                status: 'success',
                data: user
            })
        } catch(error) {
            res.status(500).json({
                status: 'error',
                message: error
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
                    res.status(500).json({
                        status: 'error',
                        message: err
                    })
                } else {
                    res.status(201).json({
                        status: 'success',
                        data: user
                    })
                }
            })

        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: JSON.stringify(error)
            })
        }
    }

    async verify(req: express.Request, res: express.Response): Promise<void> {
        try {
            const hash = req.query.hash

            if(!hash) {
                res.status(400).send()
                return
            }

            const user = await userModel.findOne({confirmHash: hash}).exec()

            if(user) {
                user.confirmed = true
                await user.save()

                res.json({
                    status: 'success'
                })
            } else {
                res.status(404).json({status: 'success',message: 'Пользователь не найден'})
            }

        } catch(error) {
            res.status(500).json({
                status: 'error',
                message: error
            })
        }
    }
}

export const userCtrl = new UserController()