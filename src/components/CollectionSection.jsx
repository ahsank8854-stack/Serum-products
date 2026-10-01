import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { collections } from '../data/products';
import { handleImageError } from '../utils/imageFallback';

export const CollectionSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container py-4">
        
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-5">
          <div>
            <span className="section-tag">Targeted Regimens</span>
            <h2 className="section-title mb-0">Shop by Hair Need</h2>
          </div>
          <Link to="/shop" className="text-dark fw-bold text-uppercase small text-decoration-none mt-2 mt-md-0 d-flex align-items-center gap-1">
            <span>Explore All Regimens</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="row g-4">
          {collections.map((col) => (
            <div key={col.id} className="col-12 col-md-6 col-lg-3">
              <div className="card border-0 rounded-3 overflow-hidden shadow-sm h-100 position-relative group bg-white">
                <div className="ratio ratio-4x5 overflow-hidden">
                  <img
                    src={col.image}
                    alt={col.title}
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
                    }}
                    className="card-img"
                    onError={(e) => handleImageError(e, col.title, col.subtitle)}
                  />
                </div>
                {/* Gradient Overlay */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4 text-white"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(18,36,25,0.92) 100%)'
                  }}
                >
                  <span className="small text-uppercase text-warning fw-semibold mb-1" style={{ fontSize: '0.7rem', letterSpacing: '0.12em' }}>
                    {col.subtitle}
                  </span>
                  <h3 className="font-serif fs-4 mb-2 text-white">{col.title}</h3>
                  <p className="small text-light opacity-90 mb-3" style={{ fontSize: '0.82rem', lineHeight: '1.4' }}>
                    {col.desc}
                  </p>
                  <Link
                    to={`/shop?collection=${encodeURIComponent(col.title)}`}
                    className="btn btn-sm btn-light rounded-pill px-3 py-2 fw-semibold text-dark text-uppercase d-inline-flex align-items-center gap-1 self-start"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.08em' }}
                  >
                    Shop Regimen <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
