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
app.post('/verify', registerValidations , userCtrl.create)

app.listen(process.env.PORT, (): void => {
    console.log('SERVER IS RUNNING!')
})