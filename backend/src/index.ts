import express from 'express'
import cors from 'cors'
import tableRoutes from './routes/table'

const app = express()
const port = 8085

app.use(cors())
app.use('/api/articles', tableRoutes)

app.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port}`)
})
