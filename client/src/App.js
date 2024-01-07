import { ChakraProvider } from '@chakra-ui/react'
import ProductsScreen from './pages/ProductsScreen';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingScreen from './pages/LandingScreen';
import ProductScreen from './pages/ProductScreen';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path='/productos' element={<ProductsScreen />} />
            <Route path='/' element={<LandingScreen />} />
            <Route path='/producto/:id' element={<ProductScreen />} />

          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
