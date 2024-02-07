import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import SideBar from '@components/SideBar/SideBar';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';
import chakraTheme from '@styles/chakraTheme';
import AuthProvider from './provider/AuthProvider';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChakraProvider theme={chakraTheme}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <AuthProvider>
              <GlobalStyle />
              <Header />
              <SideBar />
              <Outlet />
              <Footer />
            </AuthProvider>
          </QueryClientProvider>
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
