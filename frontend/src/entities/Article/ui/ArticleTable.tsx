import { memo } from 'react'
import { Article, ArticleFields } from '../model/types/types'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
} from '@mui/material'
import SkeletonTable from '@/shared/ui/SkeletonTable'
import { SUBTITLE_SIZE } from '@/shared/lib/constants/constants'

interface ArticleTableProps {
  data: Article[]
  loading: boolean
  error: string
  limit: number
}

const ArticleTable = (props: ArticleTableProps) => {
  const { loading, error, data, limit } = props
  if (loading) {
    return <SkeletonTable rows={limit} columns={5} />
  }

  if (error) {
    return (
      <Typography variant={SUBTITLE_SIZE} gutterBottom>
        Ошибка загрузки данных.
      </Typography>
    )
  }

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {Object.values(ArticleFields).map((field) => (
                <TableCell key={field}>{field}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.articleid}>
                {Object.values(ArticleFields).map((field) => (
                  <TableCell key={field}>
                    {row[field as keyof Article]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default memo(ArticleTable)
