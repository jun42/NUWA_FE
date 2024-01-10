import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import SideBar from '@components/SideBar/SideBar';
import GlobalStyle from '@styles/globalStyle';

const queryClient = new QueryClient();
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
