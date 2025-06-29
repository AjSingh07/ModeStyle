import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WomenPage } from './pages/WomenPage';
import { MenPage } from './pages/MenPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { SalePage } from './pages/SalePage';
import { TrendingSection } from './components/TrendingSection';
import { BuyNowPage } from './pages/BuyNowPage';
import { CartPage } from './pages/CartPage';
import { CartProvider } from './context/CartContext';

export function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="relative min-h-screen">
          {/* Background Pattern - Optimized */}
          <div className="fixed inset-0 bg-[#f8f7f4]">
            {/* Static gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a2456]/5 via-transparent to-[#c76d4e]/5"></div>
            
            {/* Optimized pattern overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2456' fill-opacity='0.1'%3E%3Cpath d='M36 34c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm0-8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>

            {/* Simplified animated shapes */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1a2456] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
              <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#c76d4e] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#e6d2b5] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/women" element={<WomenPage />} />
              <Route path="/men" element={<MenPage />} />
              <Route path="/accessories" element={<AccessoriesPage />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route path="/sale" element={<SalePage />} />
              <Route path="/buy-now/:productId" element={<BuyNowPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
          </div>
        </div>

        <style>
          {`
            /* Optimized animations */
            @keyframes blob {
              0% { transform: translate(0px, 0px) scale(1); }
              50% { transform: translate(20px, -20px) scale(1.05); }
              100% { transform: translate(0px, 0px) scale(1); }
            }
            .animate-blob {
              animation: blob 10s ease-in-out infinite;
              will-change: transform;
            }
            .animation-delay-2000 {
              animation-delay: 2s;
            }
            .animation-delay-4000 {
              animation-delay: 4s;
            }

            /* Smooth scrolling */
            html {
              scroll-behavior: smooth;
            }

            /* Optimize animations */
            * {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }

            /* Hardware acceleration for animations */
            .animate-blob {
              transform: translateZ(0);
              backface-visibility: hidden;
              perspective: 1000px;
            }
          `}
        </style>
      </BrowserRouter>
    </CartProvider>
  );
} 