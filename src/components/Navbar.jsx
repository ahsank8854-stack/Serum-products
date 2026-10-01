import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, User, ShoppingBag, Heart, Menu, X, Leaf } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Navbar = () => {
  const { totalCartCount, toggleCartDrawer, searchQuery, setSearchQuery, wishlist } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar text-center">
        <div className="container d-flex justify-content-center align-items-center gap-2">
          <Leaf size={14} className="text-warning" />
          <span>COMPLIMENTARY EXPRESS SHIPPING ON ORDERS OVER $75 &bull; USE CODE <strong>VERDANT15</strong> FOR 15% OFF</span>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky-top-navbar ${isScrolled ? 'shadow-sm py-2' : 'py-3'}`}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            
            {/* Mobile Hamburger Menu Toggle */}
            <button
              className="d-lg-none icon-btn-nav me-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Brand Logo */}
            <Link to="/" className="navbar-brand-logo d-flex align-items-center gap-2 me-lg-4">
              <span style={{ color: 'var(--color-primary)' }}>VERDANT</span>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--color-accent)', fontWeight: 600 }}>BOTANICALS</span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="d-none d-lg-flex align-items-center gap-1 mx-auto">
              <NavLink to="/" className={({ isActive }) => `nav-link-verdant ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
              <NavLink to="/shop" className={({ isActive }) => `nav-link-verdant ${isActive ? 'active' : ''}`}>
                Shop
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `nav-link-verdant ${isActive ? 'active' : ''}`}>
                About
              </NavLink>
              <NavLink to="/ingredients" className={({ isActive }) => `nav-link-verdant ${isActive ? 'active' : ''}`}>
                Ingredients
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav-link-verdant ${isActive ? 'active' : ''}`}>
                Contact
              </NavLink>
            </nav>

            {/* Right Action Icons */}
            <div className="d-flex align-items-center gap-2">
              
              {/* Search Icon / Bar Toggle */}
              <button
                className="icon-btn-nav"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search"
                title="Search products"
              >
                <Search size={20} />
              </button>

              {/* Wishlist Link */}
              <Link to="/shop?filter=wishlist" className="icon-btn-nav d-none d-sm-flex" title="Wishlist">
                <Heart size={20} />
                {wishlist.length > 0 && (
                  <span className="cart-badge-count" style={{ backgroundColor: 'var(--color-primary)' }}>
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Account Shortcut */}
              <Link to="/contact" className="icon-btn-nav d-none d-sm-flex" title="Account / Help">
                <User size={20} />
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                className="icon-btn-nav ms-1"
                onClick={toggleCartDrawer}
                aria-label="Shopping Bag"
                title="Shopping Bag"
              >
                <ShoppingBag size={21} />
                {totalCartCount > 0 && (
                  <span className="cart-badge-count">{totalCartCount}</span>
                )}
              </button>
            </div>
          </div>

          {/* Collapsible Search Bar Header Popup */}
          {isSearchOpen && (
            <div className="pt-3 pb-2 fade-in-up">
              <form onSubmit={handleSearchSubmit} className="d-flex gap-2 align-items-center max-w-lg mx-auto position-relative">
                <input
                  type="text"
                  className="form-control form-control-lg rounded-pill px-4"
                  placeholder="Search botanical haircare, ingredients, scalp elixir..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                    fontSize: '0.95rem'
                  }}
                  autoFocus
                />
                <button type="submit" className="btn btn-verdant-primary rounded-pill px-4 py-2">
                  Search
                </button>
                <button
                  type="button"
                  className="btn btn-sm text-muted ms-1"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X size={20} />
                </button>
              </form>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          className="d-lg-none position-fixed top-0 start-0 w-100 h-100 bg-white z-3 p-4 d-flex flex-column"
          style={{ backgroundColor: 'var(--bg-primary)', zIndex: 1040 }}
        >
          <div className="d-flex justify-content-between align-items-center pb-3 border-bottom mb-4">
            <span className="navbar-brand-logo">VERDANT</span>
            <button className="btn p-0" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={28} color="var(--color-primary)" />
            </button>
          </div>

          <div className="d-flex flex-column gap-3 mb-auto" style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-dark fw-medium py-2 border-bottom">
              Home
            </Link>
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-dark fw-medium py-2 border-bottom">
              Shop All Products
            </Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-dark fw-medium py-2 border-bottom">
              Our Story & Ethos
            </Link>
            <Link to="/ingredients" onClick={() => setIsMobileMenuOpen(false)} className="text-dark fw-medium py-2 border-bottom">
              Botanical Ingredients
            </Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-dark fw-medium py-2 border-bottom">
              Contact & Support
            </Link>
            <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)} className="text-dark fw-medium py-2 border-bottom d-flex justify-content-between">
              <span>View Shopping Bag</span>
              <span className="badge bg-success rounded-pill">{totalCartCount}</span>
            </Link>
          </div>

          <div className="pt-4 border-top">
            <p className="small text-muted mb-2">Sustainable &bull; Organic &bull; Cruelty-Free</p>
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-verdant-primary w-100">
              Shop Botanical Rituals
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
