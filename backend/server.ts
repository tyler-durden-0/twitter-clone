import express from 'express'
import {userCtrl} from "./controllers/UserController";
import {registerValidations} from "./validations/register";

const app = express()
app.use(express.json())

app.get('/users', userCtrl.index)
app.post('/users', registerValidations , userCtrl.create)

app.listen(8888, (): void => {
    console.log('SERVER IS RUNNING!')
})