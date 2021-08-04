import express from 'express'
import dotenv from 'dotenv'
import {userCtrl} from "./controllers/UserController";
import {registerValidations} from "./validations/register";
import './core/db'
import {passport} from "./core/passport";
dotenv.config()

const app = express()

app.use(express.json())
app.use(passport.initialize())

app.get('/users', userCtrl.index)
app.get('/users/me', passport.authenticate('jwt', {session: 'false'}),userCtrl.getUserInfo)
app.get('/users/:id', userCtrl.show)
app.get('/auth/verify', registerValidations , userCtrl.verify)
app.post('/auth/register', registerValidations , userCtrl.create)
app.post('/auth/login', passport.authenticate('local'), userCtrl.afterLogin);

app.listen(process.env.PORT, (): void => {
    console.log('SERVER IS RUNNING!')
})