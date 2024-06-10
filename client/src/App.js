import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import Footer from './components/UI/Footer/Footer';

const App = () => {

  return (
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
  )
}

export default App;