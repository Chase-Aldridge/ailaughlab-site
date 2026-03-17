'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { type ThemeId, defaultTheme, themes } from './theme-config'

interface ThemeContextValue {
  theme: ThemeId
  setTheme: (theme: ThemeId) => void
  showSelector: boolean
  setShowSelector: (show: boolean) => void
}

const defaultValue: ThemeContextValue = {
  theme: defaultTheme,
  setTheme: () => {},
  showSelector: false,
  setShowSelector: () => {},
}

const ThemeContext = createContext<ThemeContextValue>(defaultValue)

const STORAGE_KEY = 'all-theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(defaultTheme)
  const [showSelector, setShowSelector] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeId | null
    if (stored && themes[stored]) {
      setThemeState(stored)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [theme, mounted])

  const setTheme = useCallback((newTheme: ThemeId) => {
    setThemeState(newTheme)
    localStorage.setItem(STORAGE_KEY, newTheme)
    setShowSelector(false)
  }, [])

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, showSelector, setShowSelector }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
