import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets } from 'lucide-react';
import { ingredients } from '../data/ingredients';
import { handleImageError } from '../utils/imageFallback';

export const IngredientsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-5" style={{ backgroundColor: 'var(--bg-primary)' }}>
      
      {/* Header Banner */}
      <section className="container py-4 text-center">
        <div className="max-w-2xl mx-auto mb-5">
          <span className="section-tag">Pure Bio-Active Compounds</span>
          <h1 className="display-4 font-serif text-dark mb-3">The VERDANT Ingredient Compendium</h1>
          <p className="lead text-muted fs-5">
            Every botanical extract in our formulas is chosen for its clinically-proven bio-activity, cold-pressed extraction purity, and synergistic ability to revitalize scalp health.
          </p>
        </div>
      </section>

      {/* Grid of Botanical Ingredients */}
      <section className="container pb-5">
        <div className="row g-4">
          {ingredients.map((ing) => (
            <div key={ing.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden bg-white">
                <div className="ratio ratio-16x9">
                  <img
                    src={ing.image}
                    alt={ing.name}
                    className="card-img-top object-fit-cover"
                    onError={(e) => handleImageError(e, ing.name, ing.role)}
                  />
                </div>

                <div className="card-body p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="badge-verdant badge-gold">{ing.role}</span>
                      <span className="small text-muted" style={{ fontSize: '0.75rem' }}>{ing.origin}</span>
                    </div>

                    <h3 className="font-serif fs-4 mb-2 text-dark">{ing.name}</h3>
                    <p className="small text-muted mb-4" style={{ lineHeight: '1.6' }}>
                      {ing.desc}
                    </p>
                  </div>

                  <Link
                    to={`/shop?search=${encodeURIComponent(ing.name.split(' ')[1] || ing.name)}`}
                    className="btn btn-verdant-outline btn-sm w-100 text-center py-2"
                  >
                    View Products With {ing.name} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sourcing Guarantee Footer Card */}
      <section className="container py-4 mb-4">
        <div className="p-5 bg-dark text-white rounded-3 text-center position-relative overflow-hidden">
          <div className="position-relative z-2 max-w-xl mx-auto" style={{ maxWidth: '600px' }}>
            <Droplets size={36} className="text-warning mb-3" />
            <h3 className="display-6 font-serif text-white mb-3">Cold-Pressed Extraction Guarantee</h3>
            <p className="text-light opacity-90 small mb-4" style={{ lineHeight: '1.7' }}>
              Standard cosmetics heat ingredients up to 180°C, destroying over 70% of sensitive natural vitamins. VERDANT utilizes low-temperature mechanical cold-press extraction to ensure 100% molecular vitality.
            </p>
            <Link to="/shop" className="btn btn-verdant-gold py-3 px-4 fs-6">
              Shop Cold-Pressed Formulas
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
