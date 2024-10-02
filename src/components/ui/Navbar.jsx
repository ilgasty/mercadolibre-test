import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useForm } from '../../hooks/useForm';
import { GoSearch } from 'react-icons/go';
export const Navbar = () => {
  const navigate = useNavigate();
  const { serchText, onInputChange, onResetForm } = useForm({
    serchText: ''
  });
  const handleSearch = (e) => {
    e.preventDefault();
    if (serchText) {
      navigate(`/items?search=${serchText}`);
      onResetForm("")
    }
  };
  return (
    <>
     <HelmetProvider>
     <Helmet>
        <title>Test Mercadolibre</title>
        <meta name="description" content="Mercado libre productos test" />
        <meta name="keywords" content="Mercadolibre, venta, compra" />
        <meta property="og:title" content="test Mercadolibre" />
        <meta property="og:description" content="Busqueda de productos!" />
      </Helmet>
      <form className="searchbox_search-box" onSubmit={handleSearch}>
        <Link to={`/`} className="item-link">
          <img src="data:image/png;base64,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"
            className='searchbox_logo'
            alt="Mercado Libre" />
        </Link>

        <input
          type="text"
          name='serchText'
          autoComplete='off'
          value={serchText}
          onChange={onInputChange}
          placeholder="Buscar productos..."
        />
        <button type="submit" className="search-btn">
          <GoSearch size={15} />
        </button>
      </form>
     </HelmetProvider>
     
    </>

  )
}
