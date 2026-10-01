import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Sparkles, ArrowRight, Droplet } from 'lucide-react';
import { products } from '../data/products';
import { handleImageError } from '../utils/imageFallback';

export const ProductMotionSection = () => {
  // Fallback to top products if motionVideo filter is empty
  const defaultMotionVideo = 'https://assets.mixkit.co/videos/preview/mixkit-water-droplets-falling-on-green-leaves-40914-large.mp4';
  const motionProducts = products.slice(0, 3);
  const [selectedProduct, setSelectedProduct] = useState(motionProducts[0] || products[0]);

  if (!selectedProduct) return null;

  const currentVideo = selectedProduct.motionVideo || defaultMotionVideo;

  return (
    <section className="py-5 bg-dark text-white position-relative overflow-hidden">
      <div className="container py-5 position-relative z-2">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-dark border border-secondary mb-3 text-warning">
            <Sparkles size={16} />
            <span className="small text-uppercase fw-semibold" style={{ letterSpacing: '0.15em' }}>
              Bio-Active Motion Showcase
            </span>
          </div>
          <h2 className="display-4 font-serif text-white mb-3">Formula In Motion</h2>
          <p className="lead text-light opacity-85 fs-5">
            Observe the viscosity, silk texture, and immediate light reflectivity of our pure cold-pressed botanical extractions.
          </p>
        </div>

        <div className="row g-5 align-items-center">
          
          {/* Autoplay Video Player Left */}
          <div className="col-lg-7">
            <div className="position-relative rounded-3 overflow-hidden shadow-lg border border-secondary">
              <video
                key={selectedProduct.id}
                autoPlay
                loop
                muted
                playsInline
                poster={selectedProduct.images?.[0]}
                className="w-100 object-fit-cover d-block"
                style={{ height: '480px', filter: 'brightness(0.95)' }}
              >
                <source src={currentVideo} type="video/mp4" />
              </video>

              {/* Autoplay Badge Overlay */}
              <div className="position-absolute top-0 start-0 m-3 px-3 py-2 bg-dark bg-opacity-75 rounded-pill border border-secondary d-flex align-items-center gap-2">
                <span className="spinner-grow spinner-grow-sm text-warning" role="status" />
                <span className="small text-uppercase fw-bold text-white" style={{ fontSize: '0.72rem', letterSpacing: '0.1em' }}>
                  Live Motion Autoplay
                </span>
              </div>

              {/* Product Info Glass Overlay */}
              <div
                className="position-absolute bottom-0 start-0 end-0 p-4 text-white"
                style={{
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(18,36,25,0.92) 100%)'
                }}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <span className="badge-verdant badge-gold mb-1">{selectedProduct.category}</span>
                    <h3 className="font-serif fs-3 mb-1 text-white">{selectedProduct.name}</h3>
                    <p className="small text-light opacity-90 mb-0 d-none d-sm-block" style={{ maxWidth: '400px' }}>
                      {selectedProduct.shortDescription}
                    </p>
                  </div>
                  <Link
                    to={`/product/${selectedProduct.id}`}
                    className="btn btn-verdant-gold py-2 px-4 fs-6 text-nowrap"
                  >
                    Shop Formula <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Motion Video Selector Right */}
          <div className="col-lg-5">
            <h4 className="font-serif fs-3 text-white mb-4">Select Formula Motion</h4>
            
            <div className="d-flex flex-column gap-3">
              {motionProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedProduct(p)}
                  className={`p-3 rounded-3 border transition-all cursor-pointer d-flex align-items-center gap-3 ${
                    selectedProduct.id === p.id
                      ? 'bg-secondary bg-opacity-25 border-warning shadow-md'
                      : 'bg-dark bg-opacity-50 border-secondary opacity-75'
                  }`}
                  style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                >
                  <div className="position-relative rounded-2 overflow-hidden flex-shrink-0" style={{ width: '80px', height: '80px' }}>
                    <img
                      src={p.images?.[0]}
                      alt={p.name}
                      className="w-100 h-100 object-fit-cover"
                      onError={(e) => handleImageError(e, p.name, p.category)}
                    />
                    <div className="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-75 rounded-circle p-1">
                      <Play size={14} className="text-warning fill-warning ms-0.5" />
                    </div>
                  </div>

                  <div className="flex-grow-1">
                    <span className="small text-uppercase text-warning fw-semibold" style={{ fontSize: '0.7rem' }}>
                      {p.category} &bull; {p.badge}
                    </span>
                    <h6 className="font-serif fs-5 mb-1 text-white">{p.name}</h6>
                    <span className="small text-light opacity-80">${p.price.toFixed(2)}</span>
                  </div>

                  {selectedProduct.id === p.id && (
                    <div className="text-warning pe-2">
                      <Droplet size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
