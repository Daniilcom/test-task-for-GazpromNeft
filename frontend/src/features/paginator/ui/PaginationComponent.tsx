import { useCallback, memo } from 'react'
import { Pagination } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/useTypeRedux'
import { setPage } from '@/entities/Article/model/slice/articleSlice'

const PaginationComponent = () => {
  const dispatch = useAppDispatch()
  const { page, totalPages } = useAppSelector((state) => state.article)

  const handlePageChange = useCallback(
    (_: unknown, value: number) => {
      dispatch(setPage(value))
    },
    [dispatch]
  )

  return (
    <Pagination
      count={totalPages}
      page={page}
      onChange={handlePageChange}
      variant="outlined"
      shape="rounded"
    />
  )
}

export default memo(PaginationComponent)
