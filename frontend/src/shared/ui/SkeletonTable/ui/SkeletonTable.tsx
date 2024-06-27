import { memo } from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Skeleton,
} from '@mui/material'

interface SkeletonTableProps {
  rows: number
  columns: number
}

const SkeletonTable = (props: SkeletonTableProps) => {
  const { rows, columns } = props
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {Array.from(new Array(columns)).map((_, columnIndex) => (
              <TableCell key={columnIndex}>
                <Skeleton animation="wave" />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from(new Array(rows)).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {Array.from(new Array(columns)).map((_, columnIndex) => (
                <TableCell key={columnIndex}>
                  <Skeleton animation="wave" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default memo(SkeletonTable)
