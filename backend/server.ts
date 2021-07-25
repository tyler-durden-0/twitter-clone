import express from 'express'
import dotenv from 'dotenv'
import {userCtrl} from "./controllers/UserController";
import {registerValidations} from "./validations/register";
import './core/db'
dotenv.config()

const app = express()

app.use(express.json())

app.get('/users', userCtrl.index)
app.post('/users', registerValidations , userCtrl.create)
app.get('/users/verify', registerValidations , userCtrl.verify)
app.get('/users/:id', registerValidations , userCtrl.show)

app.listen(process.env.PORT, (): void => {
    console.log('SERVER IS RUNNING!')
})