import { dataApi } from '@/shared/api/api'
import { REQ_ERROR_TEXT } from '@/shared/lib/constants/constants'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface IFetchArticlesData {
  page: number
  limit: number
}

export const fetchArticlesData = createAsyncThunk(
  'articles/fetchArticlesData',
  async ({ page, limit }: IFetchArticlesData, thunkAPI) => {
    try {
      const response = await dataApi.get(`articles?page=${page}&limit=${limit}`)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(REQ_ERROR_TEXT)
    }
  }
)
