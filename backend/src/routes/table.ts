import { Router, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  const jsonFilePath = path.resolve(__dirname, '../../data/tableData.json')
  const page = parseInt(req.query.page as string, 10) || 1
  const limit = parseInt(req.query.limit as string, 10) || 10
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading JSON file')
      return
    }

    const articles = JSON.parse(data)
    const paginatedArticles = articles.slice(startIndex, endIndex)
    const totalItems = articles.length
    const totalPages = Math.ceil(totalItems / limit)

    res.json({
      page,
      limit,
      totalPages,
      totalItems,
      articles: paginatedArticles,
    })
  })
})

export default router
