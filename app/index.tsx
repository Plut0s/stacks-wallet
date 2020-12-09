import React, { Fragment } from 'react';
import { ThemeProvider, ColorModeProvider } from '@stacks/ui';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';

import { configureStore, history } from './store/configureStore';

const { store, persistor } = configureStore();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Root = require('./pages/root').default;
  render(
    <ThemeProvider>
      <ColorModeProvider>
        <AppContainer>
          <Root store={store} persistor={persistor} history={history} />
        </AppContainer>
      </ColorModeProvider>
    </ThemeProvider>,
    document.getElementById('root')
  );
});
