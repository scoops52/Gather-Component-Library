import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from '@/store';


export default function App({ Component, pageProps }) {
  return (
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
  </Provider>
  )
}
