import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export const TestimonialsSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container py-4">
        
        <div className="text-center max-w-xl mx-auto mb-5">
          <span className="section-tag">Real Transformation</span>
          <h2 className="section-title">Loved by Thousands of Strands</h2>
          <p className="section-desc mx-auto">
            Read how VERDANT botanical rituals restored hair density, strength, and glass shine for our community.
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-3">
              <div className="testimonial-card">
                <div>
                  <div className="d-flex align-items-center gap-1 text-warning mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--color-accent)" stroke="var(--color-accent)" />
                    ))}
                  </div>
                  <h4 className="font-serif fs-5 mb-2 text-dark">"{item.title}"</h4>
                  <p className="small text-muted mb-4" style={{ lineHeight: '1.6' }}>
                    {item.review}
                  </p>
                </div>

                <div className="pt-3 border-top d-flex align-items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="rounded-circle"
                    style={{ width: '42px', height: '42px', objectFit: 'cover' }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold fs-6 text-dark">{item.name}</h6>
                    <div className="d-flex align-items-center gap-1 text-success small" style={{ fontSize: '0.72rem' }}>
                      <CheckCircle2 size={12} />
                      <span>{item.role} &bull; {item.location}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
