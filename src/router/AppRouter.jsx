import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MercadolibrePage } from '../mercadolibre/pages/MercadolibrePage';
import { ResultPage } from '../mercadolibre/pages/ResultPage';
import { ProductPage } from '../mercadolibre/pages/ProductPage';
import { Navbar } from '../components/ui/Navbar';


export const AppRouter = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<MercadolibrePage />} />
        <Route path="/items" element={<ResultPage />} />
        <Route path="/items/:id" element={<ProductPage />} />
      </Routes>

    </>
  )
}
