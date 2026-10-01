import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2, Shield, Heart, Award } from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';

export const RitualShowcaseSection = () => {
  const ritualSteps = [
    {
      step: '01',
      title: 'Scalp Detox & Exfoliation',
      subtitle: 'Clear buildup & awaken micro-circulation',
      productName: 'Amla & Peppermint Detox Scalp Scrub',
      productId: 'amla-peppermint-scalp-scrub',
      image: '/images/product-6-a.jpg',
      description: 'Himalayan pink salts gently exfoliate dead skin cells and dry shampoo residue, allowing oxygen to reach dormant hair follicles.',
      time: '1x Weekly',
      benefit: 'Purifies scalp biome & clears pore clogging'
    },
    {
      step: '02',
      title: 'Bio-Active Cleansing',
      subtitle: 'Sulfate-free lipid moisture wash',
      productName: 'Hydra-Nourish Botanical Shampoo',
      productId: 'hydra-nourish-botanical-shampoo',
      image: '/images/product-2-a.jpg',
      description: 'Aloe vera gel and green tea antioxidants cleanse excess sebum without stripping your scalps natural protective acid mantle.',
      time: 'Daily / 2-3x Weekly',
      benefit: 'Hydrates scalp skin & restores physiological pH'
    },
    {
      step: '03',
      title: 'Cuticle Lipid Reconstruction',
      subtitle: 'Bio-ceramide & argan oil sealing',
      productName: 'Ceramide & Argan Restorative Conditioner',
      productId: 'ceramide-argan-restorative-conditioner',
      image: '/images/product-4-a.jpg',
      description: 'Plant-derived ceramides seal hair cuticle scales tight to eliminate humidity frizz, mending split ends and boosting glass-like shine.',
      time: 'After Cleansing',
      benefit: 'Smooths cuticle friction & mends breakage'
    },
    {
      step: '04',
      title: 'Follicle Density Activation',
      subtitle: 'Targeted botanical growth tincture',
      productName: 'Rosemary & Biotin Scalp Elixir',
      productId: 'rosemary-biotin-scalp-elixir',
      image: '/images/rosemary-biotin-scalp-elixir.jpg',
      description: 'Cold-pressed rosemary oil, biotin, and amla polyphenols stimulate blood flow to hair roots for thicker, more resilient growth.',
      time: 'Daily Leave-in',
      benefit: 'Stimulates root circulation & boosts hair volume'
    }
  ];

  const [activeStep, setActiveStep] = useState(ritualSteps[0]);

  return (
    <section className="py-5" style={{ backgroundColor: 'var(--bg-dark)', color: '#FFFFFF' }}>
      <div className="container py-5">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-5" style={{ maxWidth: '680px' }}>
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-dark border border-secondary mb-3 text-warning">
            <Sparkles size={16} />
            <span className="small text-uppercase fw-semibold" style={{ letterSpacing: '0.15em' }}>
              Clinical Botanical Protocol
            </span>
          </div>
          <h2 className="display-4 font-serif text-white mb-3" style={{ lineHeight: '1.2' }}>
            The 4-Step Hair Density Ritual
          </h2>
          <p className="lead text-light opacity-90 fs-5">
            A daily botanical ritual engineered to detoxify the scalp, protect physiological pH, and awaken hair follicles.
          </p>
        </div>

        {/* Clinical Proof Statistics Bar */}
        <div className="row g-4 mb-5 p-4 rounded-3 bg-dark bg-opacity-75 border border-secondary text-center">
          <div className="col-12 col-md-4 border-end border-secondary border-opacity-50">
            <div className="display-5 font-serif text-warning fw-bold mb-1">96%</div>
            <p className="small text-light opacity-90 mb-0">Reported reduction in scalp flaking & dryness in 14 days</p>
          </div>
          <div className="col-12 col-md-4 border-end border-secondary border-opacity-50">
            <div className="display-5 font-serif text-warning fw-bold mb-1">92%</div>
            <p className="small text-light opacity-90 mb-0">Observed mended cuticles & reduced hair breakage</p>
          </div>
          <div className="col-12 col-md-4">
            <div className="display-5 font-serif text-warning fw-bold mb-1">88%</div>
            <p className="small text-light opacity-90 mb-0">Measured increase in hair strand thickness & density</p>
          </div>
        </div>

        {/* Interactive Step Navigator */}
        <div className="row g-5 align-items-center">
          
          {/* Step Selector Tabs Left */}
          <div className="col-lg-5">
            <h4 className="font-serif fs-3 text-white mb-4">Explore Ritual Steps</h4>
            <div className="d-flex flex-column gap-3">
              {ritualSteps.map((stepItem) => {
                const isActive = activeStep.step === stepItem.step;
                return (
                  <div
                    key={stepItem.step}
                    onClick={() => setActiveStep(stepItem)}
                    className={`p-3 rounded-3 border transition-all cursor-pointer d-flex align-items-center gap-3 ${
                      isActive
                        ? 'bg-secondary bg-opacity-25 border-warning shadow-lg'
                        : 'bg-dark bg-opacity-50 border-secondary opacity-75'
                    }`}
                    style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                  >
                    <div className="font-serif fs-3 fw-bold text-warning opacity-90 px-2">
                      {stepItem.step}
                    </div>
                    <div className="flex-grow-1">
                      <span className="small text-uppercase text-warning fw-semibold" style={{ fontSize: '0.68rem', letterSpacing: '0.1em' }}>
                        {stepItem.time}
                      </span>
                      <h6 className="font-serif fs-5 mb-0 text-white">{stepItem.title}</h6>
                    </div>
                    {isActive && <CheckCircle2 size={20} className="text-warning me-2" />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Step Feature Card Right */}
          <div className="col-lg-7">
            <div className="p-4 p-md-5 rounded-3 bg-dark bg-opacity-90 border border-secondary position-relative overflow-hidden">
              <div className="row align-items-center g-4">
                
                {/* Product Image */}
                <div className="col-md-5">
                  <div className="ratio ratio-3x4 rounded-3 overflow-hidden shadow-lg border border-secondary bg-white">
                    <img
                      src={activeStep.image}
                      alt={activeStep.productName}
                      className="w-100 h-100 object-fit-cover"
                      onError={(e) => handleImageError(e, activeStep.productName, activeStep.title)}
                    />
                  </div>
                </div>

                {/* Step Details */}
                <div className="col-md-7 text-start">
                  <span className="badge-verdant badge-gold mb-2">Step {activeStep.step} &bull; {activeStep.time}</span>
                  <h3 className="font-serif fs-2 text-white mb-2">{activeStep.title}</h3>
                  <p className="text-warning small fw-semibold text-uppercase mb-3" style={{ letterSpacing: '0.1em' }}>
                    {activeStep.subtitle}
                  </p>
                  <p className="text-light opacity-90 small mb-4" style={{ lineHeight: '1.7' }}>
                    {activeStep.description}
                  </p>

                  <div className="p-3 bg-secondary bg-opacity-15 rounded-3 border border-secondary mb-4">
                    <div className="d-flex align-items-center gap-2 text-warning small mb-1">
                      <Shield size={16} />
                      <span className="fw-semibold text-uppercase" style={{ fontSize: '0.72rem' }}>Target Benefit</span>
                    </div>
                    <p className="small text-white mb-0">{activeStep.benefit}</p>
                  </div>

                  <Link
                    to={`/product/${activeStep.productId}`}
                    className="btn btn-verdant-gold py-3 px-4 fs-6 w-100 justify-content-center"
                  >
                    View {activeStep.productName} <ArrowRight size={18} />
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
