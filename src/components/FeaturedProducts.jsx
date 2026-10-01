import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';

export const FeaturedProducts = () => {
  const { products } = useShop();
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = activeTab === 'all'
    ? products.slice(0, 6)
    : products.filter(p => p.categoryKey === activeTab).slice(0, 6);

  return (
    <section className="py-5" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container py-4">
        
        {/* Section Title Header */}
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-5">
          <div>
            <span className="section-tag">Pure Formulations</span>
            <h2 className="section-title mb-0">Featured Botanical Rituals</h2>
          </div>

          {/* Tab Filters */}
          <div className="d-flex flex-wrap gap-2 mt-3 mt-md-0">
            {[
              { label: 'All Rituals', key: 'all' },
              { label: 'Hair Oils', key: 'hair-oil' },
              { label: 'Hair Masks', key: 'hair-mask' },
              { label: 'Shampoos', key: 'shampoo' },
              { label: 'Serums', key: 'serum' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-medium ${
                  activeTab === tab.key
                    ? 'btn-dark'
                    : 'btn-outline-secondary border-0 bg-light text-dark'
                }`}
                style={{ fontSize: '0.82rem', letterSpacing: '0.04em' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="row g-4 mb-5">
          {filteredProducts.map(product => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="text-center pt-3">
          <Link to="/shop" className="btn btn-verdant-outline px-5 py-3 fs-6">
            View Complete Shop Collection <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};
