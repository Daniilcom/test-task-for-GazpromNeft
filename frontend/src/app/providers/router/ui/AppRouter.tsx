import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Loader } from '@/shared/ui/Loader'
import { routeConfig } from '@/app/config/routeConfig/routeConfig'

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={<>{element}</>} />
        ))}
      </Routes>
    </Suspense>
  )
}
