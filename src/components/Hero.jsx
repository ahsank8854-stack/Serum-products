import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Leaf, ChevronRight } from 'lucide-react';
import heroVideoSrc from '../assets/gemini_generated_video_99cf4434.mp4';

import TextType from './TextType';

export const Hero = () => {
  return (
    <section className="hero-wrapper position-relative overflow-hidden">
      
      {/* Motion Product Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1608248597262-8382ebd83120?auto=format&fit=crop&w=1920&q=85"
        className="hero-video-bg"
      >
        <source src={heroVideoSrc} type="video/mp4" />
      </video>

      {/* Hero Feathered Gradient Overlay */}
      <div className="hero-feather-overlay" />

      <div className="container hero-content py-5 my-5 position-relative z-2">
        <div className="row align-items-center">
          <div className="col-lg-9 col-xl-8">
            
            {/* Shutter Wiping Glass Eyebrow Pill */}
            <Link
              to="/shop?category=hair-oil"
              className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill hero-pill-glass text-warning text-decoration-none mb-4 max-w-100 flex-wrap"
              style={{ fontSize: '0.78rem', letterSpacing: '0.12em' }}
            >
              <Sparkles size={14} className="text-warning flex-shrink-0" />
              <span className="text-uppercase fw-bold text-white">VIEW OUR MERIDIAN* BOTANICAL WORK</span>
              <ChevronRight size={14} className="text-light flex-shrink-0" />
            </Link>

            {/* React Bits TextType Animated Headline */}
            <h1
              className="display-2 font-serif fw-normal text-white mb-4"
              style={{ lineHeight: '1.15', letterSpacing: '-0.02em', wordBreak: 'break-word' }}
            >
              <TextType
                text={[
                  "Botanical Alchemy for Radiant Hair Density",
                  "Cold-Pressed Elixirs for Scalp Rejuvenation",
                  "100% Bio-Active Formulations for Hair Growth"
                ]}
                as="span"
                typingSpeed={60}
                deletingSpeed={30}
                pauseDuration={2500}
                showCursor={true}
                cursorCharacter="|"
                cursorClassName="text-warning fw-bold ms-1"
                className="text-white"
              />
            </h1>

            {/* Lede Sub-description */}
            <p
              className="lead text-light mb-5 fs-5 opacity-90 fade-in-up"
              style={{ maxWidth: '620px', lineHeight: '1.7', animationDelay: '0.85s' }}
            >
              Smart reports and cold-pressed botanical formulas engineered to stimulate dormant follicles, issue scalp vitality, and stay in control of hair density.
            </p>

            {/* Wiping CTA Buttons */}
            <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-3 mb-5">
              <div className="btn-wipe w-100 w-sm-auto" style={{ '--btn-delay': '1.05s' }}>
                <Link to="/shop" className="btn btn-verdant-gold py-3 px-4 fs-6 w-100">
                  <span className="btn-wipe-inner" style={{ '--btn-delay': '1.05s' }}>
                    SEE IT HAPPEN <ArrowRight size={18} />
                  </span>
                </Link>
              </div>

              <div className="btn-wipe w-100 w-sm-auto" style={{ '--btn-delay': '1.13s' }}>
                <Link to="/about" className="btn btn-verdant-outline text-white border-white py-3 px-4 fs-6 w-100">
                  <span className="btn-wipe-inner" style={{ '--btn-delay': '1.13s' }}>
                    DISCUSS A PLAN
                  </span>
                </Link>
              </div>
            </div>

            {/* Trust Micro Indicators */}
            <div
              className="pt-4 border-top border-secondary border-opacity-50 d-flex flex-wrap gap-4 text-light small fade-in-up"
              style={{ animationDelay: '1.35s' }}
            >
              <div className="d-flex align-items-center gap-2">
                <Leaf size={16} className="text-warning" />
                <span>100% Organic Actives</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <ShieldCheck size={16} className="text-warning" />
                <span>Cold-Pressed Extraction</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Sparkles size={16} className="text-warning" />
                <span>Sulfate & Silicone Free</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
