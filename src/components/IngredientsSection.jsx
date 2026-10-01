import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ingredients } from '../data/ingredients';
import { handleImageError } from '../utils/imageFallback';

export const IngredientsSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container py-4">
        
        <div className="text-center max-w-xl mx-auto mb-5">
          <span className="section-tag">Pure Bio-Actives</span>
          <h2 className="section-title">The Botanical Library</h2>
          <p className="section-desc mx-auto">
            We formulate with high concentrations of wild-harvested plant extracts, cold-pressed oils, and bioactive compounds chosen for clinical efficacy.
          </p>
        </div>

        <div className="row g-4">
          {ingredients.map((ing) => (
            <div key={ing.id} className="col-12 col-md-6 col-lg-4">
              <div className="ingredient-card">
                <div className="ingredient-img-wrapper">
                  <img
                    src={ing.image}
                    alt={ing.name}
                    onError={(e) => handleImageError(e, ing.name, ing.role)}
                  />
                </div>
                
                <span className="badge-verdant badge-gold mb-2">{ing.role}</span>
                <h3 className="font-serif fs-4 mb-1">{ing.name}</h3>
                <div className="small text-uppercase text-muted mb-3" style={{ fontSize: '0.7rem', letterSpacing: '0.12em' }}>
                  Source: {ing.origin}
                </div>
                <p className="small text-muted mb-0">{ing.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/ingredients" className="btn btn-verdant-outline px-5 py-3 fs-6">
            Explore All Botanical Ingredients <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};
