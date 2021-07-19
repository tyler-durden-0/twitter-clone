import express from 'express'

const app = express()

app.get('/hello', (req, res) => {
    res.send('Hello1!')
})

app.listen(8888, (): void => {
    console.log('SERVER IS RUNNING!')
})