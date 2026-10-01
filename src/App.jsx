import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ToastNotification } from './components/ToastNotification';
import { Preloader } from './components/Preloader';
import { ScrollRevealInit } from './components/ScrollRevealInit';
import { PageTransition } from './components/PageTransition';

import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetails } from './pages/ProductDetails';
import { About } from './pages/About';
import { IngredientsPage } from './pages/IngredientsPage';
import { Contact } from './pages/Contact';
import { CartPage } from './pages/CartPage';
import { Checkout } from './pages/Checkout';

function App() {
  return (
    <ShopProvider>
      <Preloader />
      <Router>
        <ScrollRevealInit />
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <CartDrawer />
          <ToastNotification />
          
          <main className="flex-grow-1 main-content-wrapper">
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/ingredients" element={<IngredientsPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </PageTransition>
          </main>

          <Footer />
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;
