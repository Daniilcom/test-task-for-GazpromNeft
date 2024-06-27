import { memo, useCallback, useEffect } from 'react'
import { Box, Typography, SelectChangeEvent } from '@mui/material'
import ArticleTable from '@/entities/Article'
import PaginationControls from '@/features/paginator'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/useTypeRedux'
import { fetchArticlesData } from '@/entities/Article/model/services/fetchArticlesData'
import { setLimit, setPage } from '@/entities/Article/model/slice/articleSlice'
import {
  MIN_TABLE_WIDTH,
  ROWS_PER_MAIN_PAGE,
  START_PAGE_VALUE,
  TABLE_MARGIN,
  TABLE_PT,
  TITLE_SIZE,
} from '@/shared/lib/constants/constants'

const MainPage = () => {
  const dispatch = useAppDispatch()
  const { data, loading, error, page, limit } = useAppSelector(
    (state) => state.article
  )

  useEffect(() => {
    dispatch(fetchArticlesData({ page, limit }))
  }, [dispatch, page, limit])

  const handleRowsPerPageChange = useCallback(
    (event: SelectChangeEvent<number>) => {
      dispatch(setLimit(Number(event.target.value)))
      dispatch(setPage(START_PAGE_VALUE))
    },
    [dispatch]
  )
  return (
    <Box sx={{ maxWidth: MIN_TABLE_WIDTH, margin: TABLE_MARGIN, pt: TABLE_PT }}>
      <Typography variant={TITLE_SIZE} gutterBottom>
        Тестовое задание для АО «Газпромнефть — Мобильная карта»
      </Typography>
      <ArticleTable data={data} loading={loading} error={error} limit={limit} />
      <PaginationControls
        limit={limit}
        handleRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={ROWS_PER_MAIN_PAGE}
      />
    </Box>
  )
}

export default memo(MainPage)
