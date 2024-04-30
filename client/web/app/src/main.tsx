import React from 'react'
import { render } from 'react-dom';
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import { App } from "./App.tsx";
import theme from '@sawi/common/lib/client/web/common/src/theme';
import '@sawi/common/lib/client/web/common/src/styles/global.css';
import '@sawi/common/lib/client/web/common/src/styles/reset.css';
import '@sawi/common/lib/client/web/common/src/styles/variables.css';
import '@sawi/common/lib/client/web/common/src/styles/helpers.css';


render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <App/>
      </StylesProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
