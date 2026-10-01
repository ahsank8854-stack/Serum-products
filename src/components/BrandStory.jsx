import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';

export const BrandStory = () => {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container py-5">
        <div className="row align-items-center g-5">
          
          {/* Editorial Image Collage Left */}
          <div className="col-lg-6">
            <div className="position-relative">
              <div className="ratio ratio-4x5 shadow-lg rounded-3 overflow-hidden bg-white">
                <img
                  src="/images/product-4-a.jpg"
                  alt="Ceramide & Argan Restorative Conditioner"
                  className="w-100 h-100 object-fit-cover"
                  onError={(e) => handleImageError(e, 'Ceramide & Argan Conditioner', 'Ethos & Science')}
                />
              </div>

              {/* Floating Accent Card */}
              <div
                className="position-absolute bottom-0 start-0 m-4 p-4 bg-white rounded-3 shadow-lg d-none d-sm-block max-w-xs"
                style={{
                  borderLeft: '4px solid var(--color-accent)',
                  maxWidth: '280px',
                  zIndex: 2
                }}
              >
                <div className="d-flex align-items-center gap-2 mb-2 text-success">
                  <Leaf size={20} />
                  <span className="small text-uppercase fw-bold">100% Bio-Active</span>
                </div>
                <p className="small text-muted mb-0 font-serif fs-6 fst-italic">
                  "Every drop is cold-pressed at source to retain maximum nutrient integrity."
                </p>
              </div>

              <div
                className="position-absolute top-0 end-0 m-4 p-3 bg-dark text-white rounded-3 shadow d-none d-sm-block"
                style={{ zIndex: 2 }}
              >
                <div className="font-serif fs-4 mb-0 text-warning">EST. 2022</div>
                <span className="small text-uppercase text-light" style={{ fontSize: '0.65rem', letterSpacing: '0.15em' }}>
                  PROVENCE &bull; PARIS
                </span>
              </div>
            </div>
          </div>

          {/* Text Content Right */}
          <div className="col-lg-6">
            <span className="section-tag">Our Ethos & Science</span>
            <h2 className="section-title mb-4">
              Where Pure Botanical Alchemy Meets Clinical Performance
            </h2>

            <p className="lead text-muted fs-5 mb-4" style={{ lineHeight: '1.7' }}>
              VERDANT was born out of a refusal to accept synthetic chemical quick-fixes that strip the scalp barrier. We harness ancient herbal knowledge elevated by modern low-temperature extraction technology.
            </p>

            <p className="text-muted mb-4" style={{ lineHeight: '1.7' }}>
              We partner directly with family-owned organic farms across Provence, Morocco, and Andalusia. From wild rosemary leaves to cold-pressed virgin coconut, every ingredient is ethically harvested at peak potency without pesticides or chemical processing.
            </p>

            <div className="row g-4 mb-5 pt-2">
              <div className="col-6">
                <div className="border-start border-3 border-success ps-3">
                  <h6 className="font-serif fs-4 mb-1 text-dark">0% Fillers</h6>
                  <p className="small text-muted mb-0">No silicones, parabens, sulfates, or artificial dyes.</p>
                </div>
              </div>
              <div className="col-6">
                <div className="border-start border-3 border-warning ps-3">
                  <h6 className="font-serif fs-4 mb-1 text-dark">Cold-Pressed</h6>
                  <p className="small text-muted mb-0">Extracted below 40°C to protect delicate vitamins.</p>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn btn-verdant-primary py-3 px-4 fs-6">
              Discover Our Story <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};
