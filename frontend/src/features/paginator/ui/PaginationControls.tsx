import { memo } from 'react'
import PaginationComponent from './PaginationComponent'
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import { MIN_SX_WIDTH } from '@/shared/lib/constants/constants'

interface PaginationControlsProps {
  limit: number
  handleRowsPerPageChange: (event: SelectChangeEvent<number>) => void
  rowsPerPageOptions: number[]
}

const PaginationControls = (props: PaginationControlsProps) => {
  const { limit, handleRowsPerPageChange, rowsPerPageOptions } = props

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="16px"
    >
      <PaginationComponent />
      <Box display="flex" alignItems="center">
        <FormControl variant="outlined" sx={{ minWidth: MIN_SX_WIDTH }}>
          <InputLabel htmlFor="rows-per-page">Строки</InputLabel>
          <Select
            value={limit}
            onChange={handleRowsPerPageChange}
            label="Rows per page"
            inputProps={{
              name: 'rows-per-page',
              id: 'rows-per-page',
            }}
          >
            {rowsPerPageOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}

export default memo(PaginationControls)
