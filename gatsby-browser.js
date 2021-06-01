import React from "react"
import App from "./src/app/App"
import "./src/i18n"
import { ThemeProvider } from "./src/theme"
import { theme } from "./src/theme/theme"
import "./src/database/firebase"
import { store, persistor } from "./src/redux/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import "typeface-pt-mono"
import "whatwg-fetch"
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App>{element}</App>
      </PersistGate>
    </Provider>
  </ThemeProvider>
)
