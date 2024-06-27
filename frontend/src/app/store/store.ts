import { combineReducers, configureStore } from '@reduxjs/toolkit'
import articleSlice from '../../entities/Article/model/slice/articleSlice'

const rootReduser = combineReducers({
  article: articleSlice,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
  })
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
