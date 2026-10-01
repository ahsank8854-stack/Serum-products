import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Award, Shield, Sparkles, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-5" style={{ backgroundColor: 'var(--bg-primary)' }}>
      
      {/* Editorial Hero Header */}
      <section className="container py-4 text-center">
        <div className="max-w-2xl mx-auto mb-5">
          <span className="section-tag">Established 2022 &bull; Provence & Paris</span>
          <h1 className="display-4 font-serif text-dark mb-4" style={{ lineHeight: '1.15' }}>
            We believe true hair resilience begins with uncompromised nature.
          </h1>
          <p className="lead text-muted fs-5" style={{ lineHeight: '1.7' }}>
            VERDANT is a luxury botanical house dedicated to formulating bioactive, cold-pressed scalp therapies and hair elixirs that elevate daily hair routines into transformative botanical rituals.
          </p>
        </div>

        {/* Hero Image Collage */}
        <div className="row g-4 mb-5">
          <div className="col-md-8">
            <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow-sm bg-white">
              <img
                src="/images/brand-lab.jpg"
                alt="Botanical Harvest in Provence"
                className="w-100 h-100 object-fit-cover"
                onError={(e) => handleImageError(e, 'Botanical Harvest', 'Provence France')}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="ratio ratio-4x3 rounded-3 overflow-hidden shadow-sm mb-4 bg-white">
              <img
                src="/images/rosemary-biotin-scalp-elixir.jpg"
                alt="Organic Cold Pressed Oils"
                className="w-100 h-100 object-fit-cover"
                onError={(e) => handleImageError(e, 'Organic Cold Pressed Oils', 'Pure Extraction')}
              />
            </div>
            <div className="p-4 bg-dark text-white rounded-3 text-start">
              <div className="font-serif fs-4 text-warning mb-2">100% Transparency</div>
              <p className="small text-light opacity-90 mb-0">
                Every harvest batch is cold-pressed at source within 24 hours of hand-picking to protect delicate plant polyphenols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars Section */}
      <section className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container py-4">
          <div className="text-center max-w-xl mx-auto mb-5">
            <span className="section-tag">Our Four Guiding Pillars</span>
            <h2 className="section-title">Clean Beauty Without Compromise</h2>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-4 bg-white rounded-3 border h-100 shadow-sm text-center">
                <div className="p-3 bg-light rounded-circle d-inline-flex mb-3 text-success">
                  <Leaf size={32} />
                </div>
                <h3 className="font-serif fs-4 mb-2">100% Bio-Active</h3>
                <p className="small text-muted mb-0">
                  We formulate exclusively with wild-harvested plants and cold-pressed botanical oils rich in natural vitamins.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-4 bg-white rounded-3 border h-100 shadow-sm text-center">
                <div className="p-3 bg-light rounded-circle d-inline-flex mb-3 text-warning">
                  <Sparkles size={32} />
                </div>
                <h3 className="font-serif fs-4 mb-2">Low-Temp Extraction</h3>
                <p className="small text-muted mb-0">
                  Our proprietary cold extraction preserves delicate enzymes and antioxidants destroyed by standard heat processing.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-4 bg-white rounded-3 border h-100 shadow-sm text-center">
                <div className="p-3 bg-light rounded-circle d-inline-flex mb-3 text-success">
                  <Shield size={32} />
                </div>
                <h3 className="font-serif fs-4 mb-2">Scalp Biome Safe</h3>
                <p className="small text-muted mb-0">
                  Formulated at physiological pH (4.5–5.5) to protect your natural moisture barrier against inflammation.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-4 bg-white rounded-3 border h-100 shadow-sm text-center">
                <div className="p-3 bg-light rounded-circle d-inline-flex mb-3 text-warning">
                  <Heart size={32} />
                </div>
                <h3 className="font-serif fs-4 mb-2">Ethical Sourcing</h3>
                <p className="small text-muted mb-0">
                  We direct-trade with sustainable family farms, guaranteeing fair wages and 100% recyclable glass packaging.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sustainable Sourcing Story */}
      <section className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="section-tag">Sustainable & Zero Waste</span>
            <h2 className="section-title mb-4">Gentle on Scalp, Kind to the Planet</h2>
            <p className="text-muted leading-relaxed mb-4">
              From our dark amber UV-protected glass bottles that preserve oil vitality, to our biodegradable soy-ink cartons, VERDANT is committed to minimal environmental footprint.
            </p>

            <div className="d-flex flex-column gap-3 mb-5">
              <div className="d-flex align-items-center gap-3">
                <CheckCircle2 size={20} className="text-success flex-shrink-0" />
                <span className="fw-medium text-dark">100% Recyclable UV Amber Glass Bottles</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <CheckCircle2 size={20} className="text-success flex-shrink-0" />
                <span className="fw-medium text-dark">Leaping Bunny Certified Cruelty-Free & Vegan</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <CheckCircle2 size={20} className="text-success flex-shrink-0" />
                <span className="fw-medium text-dark">Carbon Neutral Shipping on 100% of Orders</span>
              </div>
            </div>

            <Link to="/shop" className="btn btn-verdant-primary py-3 px-4">
              Explore Our Collection <ArrowRight size={18} />
            </Link>
          </div>

          <div className="col-lg-6">
            <div className="ratio ratio-4x5 rounded-3 overflow-hidden shadow-lg bg-white">
              <img
                src="/images/rosemary-biotin-scalp-elixir.jpg"
                alt="Organic Harvest"
                className="w-100 h-100 object-fit-cover"
                onError={(e) => handleImageError(e, 'Organic Harvest', 'Sustainable Farm')}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
