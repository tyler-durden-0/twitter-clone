import express from 'express'
import dotenv from 'dotenv'
import {userCtrl} from "./controllers/UserController";
import {registerValidations} from "./validations/register";
import './core/db'

const app = express()

app.use(express.json())

dotenv.config()

app.get('/users', userCtrl.index)
app.post('/users', registerValidations , userCtrl.create)

app.listen(8888, (): void => {
    console.log('SERVER IS RUNNING!')
})