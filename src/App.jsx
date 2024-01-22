import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import SideBar from '@components/SideBar/SideBar';
import GlobalStyle from '@styles/globalStyle';
import theme from './styles/theme';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <GlobalStyle />
          <Header />
          <SideBar />
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Outlet />
          </QueryClientProvider>
          <Footer />
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
