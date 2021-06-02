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

import {Helmet} from "react-helmet"

export const onRenderBody = (
  { setHeadComponents, setHtmlAttributes, setBodyAttributes },
  pluginOptions
) => {
  const helmet = Helmet.renderStatic()  
  setHtmlAttributes(helmet.htmlAttributes.toComponent())
  setBodyAttributes(helmet.bodyAttributes.toComponent())
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ])
}

// export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
//   const headComponents = getHeadComponents()
//   console.log(headComponents)
//   headComponents.sort((x, y) => {
//     if (x.props && x.props["data-react-helmet"]) {
//       return -1
//     } else if (y.props && y.props["data-react-helmet"]) {
//       return 1
//     }
//     return 0
//   })

//   replaceHeadComponents(headComponents)
// }

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();  
  headComponents.sort((a, b) => {
    if (a.type === b.type || (a.type !== 'style' && b.type !== 'style')) {
      return 0;
    }

    if (a.type === 'style') {
      return 1;
    } else if (b.type === 'style') {
      return -1;
    }

    return 0;
  });

  replaceHeadComponents(headComponents);
};

export const wrapRootElement = ({ element }) => ( 
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App>{element}</App>
      </PersistGate>
    </Provider>
  </ThemeProvider>
)
