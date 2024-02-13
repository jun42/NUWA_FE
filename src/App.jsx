import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
// import SideBar from '@components/SideBar/SideBar';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';
import chakraTheme from '@styles/chakraTheme';
import AuthProvider from './provider/AuthProvider';
import { Outlet } from 'react-router-dom';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ChakraProvider theme={chakraTheme}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <AuthProvider>
              <Outlet />
            </AuthProvider>
          </QueryClientProvider>
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
