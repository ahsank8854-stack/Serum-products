import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, RotateCcw, Heart, Sparkles, Filter } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Shop = () => {
  const { products, wishlist } = useShop();
  const [searchParams, setSearchParams] = useSearchParams();

  // URL Query Params
  const categoryParam = searchParams.get('category') || 'all';
  const collectionParam = searchParams.get('collection') || '';
  const searchParam = searchParams.get('search') || '';
  const filterParam = searchParams.get('filter') || '';

  // Local Filter States
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [maxPrice, setMaxPrice] = useState(150);
  const [sortBy, setSortBy] = useState('default');
  const [searchTerm, setSearchTerm] = useState(searchParam);
  const [onlyWishlist, setOnlyWishlist] = useState(filterParam === 'wishlist');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    setSearchTerm(searchParam);
  }, [searchParam]);

  useEffect(() => {
    setOnlyWishlist(filterParam === 'wishlist');
  }, [filterParam]);

  // Filtering Logic
  let filtered = products.filter((p) => {
    // Category match
    if (selectedCategory !== 'all' && p.categoryKey !== selectedCategory) {
      return false;
    }
    // Collection match
    if (collectionParam && p.collection?.toLowerCase() !== collectionParam.toLowerCase()) {
      return false;
    }
    // Price match
    if (p.price > maxPrice) {
      return false;
    }
    // Search query match
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchCategory = p.category.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchCategory) return false;
    }
    // Wishlist filter
    if (onlyWishlist && !wishlist.includes(p.id)) {
      return false;
    }
    return true;
  });

  // Sorting Logic
  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'bestseller') {
    filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  const resetFilters = () => {
    setSelectedCategory('all');
    setMaxPrice(150);
    setSortBy('default');
    setSearchTerm('');
    setOnlyWishlist(false);
    setSearchParams({});
  };

  return (
    <div className="py-5" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '80vh' }}>
      <div className="container py-4">
        
        {/* Page Banner Header */}
        <div className="text-center pb-4 mb-5 border-bottom">
          <span className="section-tag">Pure Organic Formulations</span>
          <h1 className="section-title mb-2">The Haircare Boutique</h1>
          <p className="section-desc mx-auto">
            Discover bioactive scalp elixirs, lipid-repair masques, and cold-pressed botanical hair oils engineered for transformative results.
          </p>
        </div>

        <div className="row g-4">
          
          {/* Desktop Filter Sidebar / Mobile Collapsible */}
          <aside className={`col-lg-3 d-lg-block ${mobileFilterOpen ? 'd-block' : 'd-none d-lg-block'}`}>
            <div
              className="p-4 bg-white rounded-3 shadow-sm border border-light position-sticky"
              style={{ top: '100px', borderColor: 'var(--border-color)' }}
            >
              <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom">
                <div className="d-flex align-items-center gap-2 fw-bold text-dark font-serif fs-5">
                  <SlidersHorizontal size={18} />
                  <span>Filter Products</span>
                </div>
                <button
                  onClick={resetFilters}
                  className="btn btn-sm btn-link text-muted p-0 text-decoration-none d-flex align-items-center gap-1"
                  style={{ fontSize: '0.8rem' }}
                >
                  <RotateCcw size={13} /> Reset
                </button>
              </div>

              {/* Search Bar */}
              <div className="mb-4">
                <label className="form-label small fw-bold text-uppercase text-muted" style={{ letterSpacing: '0.08em' }}>
                  Search
                </label>
                <div className="input-group input-group-sm">
                  <span className="input-group-text bg-light border-end-0"><Search size={14} /></span>
                  <input
                    type="text"
                    className="form-control bg-light border-start-0"
                    placeholder="Search name, ingredient..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Category Filter List */}
              <div className="mb-4">
                <label className="form-label small fw-bold text-uppercase text-muted mb-3" style={{ letterSpacing: '0.08em' }}>
                  Category
                </label>
                <div className="d-flex flex-column gap-1">
                  {categories.map((cat) => {
                    const count = cat.key === 'all'
                      ? products.length
                      : products.filter(p => p.categoryKey === cat.key).length;
                    return (
                      <button
                        key={cat.key}
                        onClick={() => {
                          setSelectedCategory(cat.key);
                          setSearchParams(cat.key === 'all' ? {} : { category: cat.key });
                        }}
                        className={`btn btn-sm text-start py-2 px-3 rounded-2 d-flex align-items-center justify-content-between ${
                          selectedCategory === cat.key
                            ? 'btn-dark font-semibold'
                            : 'btn-light text-dark bg-transparent'
                        }`}
                        style={{ fontSize: '0.88rem' }}
                      >
                        <span>{cat.name}</span>
                        <span className="badge bg-secondary bg-opacity-20 text-dark rounded-pill" style={{ fontSize: '0.7rem' }}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price Filter Slider */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label className="form-label small fw-bold text-uppercase text-muted mb-0" style={{ letterSpacing: '0.08em' }}>
                    Max Price
                  </label>
                  <span className="fw-bold text-success">${maxPrice}</span>
                </div>
                <input
                  type="range"
                  className="form-range"
                  min="20"
                  max="150"
                  step="5"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <div className="d-flex justify-content-between small text-muted">
                  <span>$20</span>
                  <span>$150</span>
                </div>
              </div>

              {/* Wishlist Quick Toggle */}
              <div className="pt-3 border-top">
                <button
                  onClick={() => setOnlyWishlist(!onlyWishlist)}
                  className={`btn btn-sm w-100 py-2 d-flex align-items-center justify-content-center gap-2 rounded-2 ${
                    onlyWishlist ? 'btn-danger' : 'btn-outline-danger'
                  }`}
                >
                  <Heart size={16} fill={onlyWishlist ? '#FFFFFF' : 'none'} />
                  <span>{onlyWishlist ? 'Showing Saved Wishlist' : 'Show Saved Wishlist Only'} ({wishlist.length})</span>
                </button>
              </div>

            </div>
          </aside>

          {/* Main Products Listing */}
          <main className="col-lg-9">
            
            {/* Top Toolbar (Product count + Mobile filter toggle + Sorting) */}
            <div className="d-flex flex-wrap align-items-center justify-content-between pb-3 mb-4 border-bottom gap-3">
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-dark btn-sm d-lg-none"
                  onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                >
                  <Filter size={16} /> Filters
                </button>
                <span className="text-muted small">
                  Showing <strong>{filtered.length}</strong> of <strong>{products.length}</strong> products
                </span>
              </div>

              {/* Sort Dropdown */}
              <div className="d-flex align-items-center gap-2">
                <label className="small text-muted text-nowrap">Sort By:</label>
                <select
                  className="form-select form-select-sm border-secondary bg-white rounded-pill px-3 py-1"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{ width: 'auto', fontSize: '0.85rem' }}
                >
                  <option value="default">Featured & Bestselling</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="bestseller">Most Reviewed</option>
                </select>
              </div>
            </div>

            {/* Product Cards Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-5 bg-white rounded-3 p-5 border">
                <Sparkles size={48} className="text-muted mb-3 opacity-50" />
                <h4 className="font-serif mb-2">No Botanical Formulas Match Your Filter</h4>
                <p className="text-muted small mb-4">Try adjusting your price range, clearing your search term, or browsing all categories.</p>
                <button onClick={resetFilters} className="btn btn-verdant-primary rounded-pill px-4">
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="row g-4">
                {filtered.map((product) => (
                  <div key={product.id} className="col-12 col-sm-6 col-md-4">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}

          </main>

        </div>
      </div>
    </div>
  );
};
