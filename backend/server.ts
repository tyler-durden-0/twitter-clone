import express from 'express'

const app = express()

app.get('/hello', (req: express.Request, res: express.Response) => {
    res.send('Hello World!')
})

app.listen(8888, (): void => {
    console.log('SERVER IS RUNNING!')
})