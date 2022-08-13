import React, { useContext, useState } from 'react'
export const ThemeContext = React.createContext({
  mode: undefined,
  setMode: async (mode) => null,
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light")
  return <ThemeContext.Provider value={{ mode, setMode }}>{children}</ThemeContext.Provider>
}