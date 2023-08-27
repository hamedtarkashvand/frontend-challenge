import { FC, ReactNode, useMemo } from 'react'
import { createContext, useCallback } from 'react'
import { useState } from 'react'

interface ICreateContext {
  switchTheme: () => void
  isDark: boolean
}

interface IThemeProvider {
  children: ReactNode
}

const initialValue = {
  switchTheme: () => {},
  isDark: false,
}

export const ThemeContext = createContext<ICreateContext>(initialValue)

const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [isDark, setDark] = useState<boolean>(false)

  const switchTheme = useCallback(() => {
    setDark((value) => !value)
    if (isDark) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [isDark])

  const changeTheme = useMemo(() => {
    return {
      switchTheme,
      isDark,
    }
  }, [isDark, switchTheme])


  return (
    <ThemeContext.Provider
      value={changeTheme}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider
