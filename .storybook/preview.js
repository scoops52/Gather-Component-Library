import { ThemeProvider } from "styled-components";
import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/GlobalStyles';
import { Provider } from "react-redux";
import { store } from '../src/store';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
    </Provider>
    );
  }
]