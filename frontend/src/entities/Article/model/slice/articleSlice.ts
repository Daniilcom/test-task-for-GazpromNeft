import { Article, ArticleState } from '../types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchArticlesData } from '../services/fetchArticlesData'
import { LIMIT, START_PAGE_VALUE } from '@/shared/lib/constants/constants'

const initialState: ArticleState = {
  data: [],
  loading: false,
  error: '',
  page: START_PAGE_VALUE,
  limit: LIMIT,
  totalPages: 0,
  totalItems: 0,
}

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesData.pending.type, (state) => {
        state.loading = true
      })
      .addCase(
        fetchArticlesData.fulfilled.type,
        (
          state,
          action: PayloadAction<{
            articles: Article[]
            totalPages: number
            totalItems: number
          }>
        ) => {
          state.loading = false
          state.data = action.payload.articles
          state.totalPages = action.payload.totalPages
          state.totalItems = action.payload.totalItems
          state.error = ''
        }
      )
      .addCase(
        fetchArticlesData.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.loading = false
          state.error = action.payload
        }
      )
  },
})

export const { setPage, setLimit } = articleSlice.actions
export default articleSlice.reducer
