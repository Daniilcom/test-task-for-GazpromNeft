import { useState, useEffect } from 'react'

const usePersistedState = <T>(
  key: string,
  defaultValue: T,
  storage: Storage = localStorage
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState<T>(() => {
    const persistedValue = storage.getItem(key)
    return persistedValue !== null ? JSON.parse(persistedValue) : defaultValue
  })

  useEffect(() => {
    storage.setItem(key, JSON.stringify(state))
  }, [key, state, storage])

  return [state, setState]
}

export default usePersistedState
