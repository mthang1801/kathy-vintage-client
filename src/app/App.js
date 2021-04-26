import React, {useState, useEffect} from 'react'
import GlobalStyles from "./GlobalStyles.jsx"
import {useThemeUI} from "theme-ui"

const App = ({children}) => {
  const {theme, colorMode} = useThemeUI()
  console.log(theme, colorMode)
  const [selectedTheme, setSelectedTheme] = useState(theme.colors[colorMode] || theme.colors.default);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    if(theme.colors[colorMode]){
      setSelectedTheme(theme.colors[colorMode])   
    }    
  
    setThemeLoaded(true);
  }, [colorMode])

  console.log(selectedTheme)
  
  if(typeof window=== "undefined") return null; 
  return themeLoaded ? <><GlobalStyles theme={selectedTheme}/>{children} </> : null 
}

export default App
