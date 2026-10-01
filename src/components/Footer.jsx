import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, ArrowRight, ShieldCheck, Truck, RefreshCw, Award, Share2, Globe, Send } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer-verdant">
      
      {/* Brand Value Pillars Ribbon */}
      <div className="container pb-5 border-bottom border-dark mb-5">
        <div className="row g-4 text-center">
          <div className="col-6 col-md-3">
            <div className="d-flex flex-column align-items-center">
              <div className="mb-2 text-warning"><Leaf size={28} /></div>
              <h6 className="text-white mb-1 font-serif fs-5">100% Organic Actives</h6>
              <p className="small mb-0 text-light opacity-90">Zero synthetic filler or parabens</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex flex-column align-items-center">
              <div className="mb-2 text-warning"><Truck size={28} /></div>
              <h6 className="text-white mb-1 font-serif fs-5">Complimentary Express</h6>
              <p className="small mb-0 text-light opacity-90">Free shipping on orders over $75</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex flex-column align-items-center">
              <div className="mb-2 text-warning"><RefreshCw size={28} /></div>
              <h6 className="text-white mb-1 font-serif fs-5">30-Day Happiness Guarantee</h6>
              <p className="small mb-0 text-light opacity-90">Love your results or easy return</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex flex-column align-items-center">
              <div className="mb-2 text-warning"><Award size={28} /></div>
              <h6 className="text-white mb-1 font-serif fs-5">Award-Winning Formulas</h6>
              <p className="small mb-0 text-light opacity-90">Vogue Beauty Excellence 2025</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-5">
          
          {/* Brand Info */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="navbar-brand-logo text-white fs-2">VERDANT</span>
            </div>
            <p className="text-light opacity-90 small mb-4" style={{ lineHeight: '1.7', maxWidth: '320px' }}>
              Pioneering clean botanical haircare formulated with pure cold-pressed bio-actives, rare plant extracts, and clinical performance for vibrant, resilient strands.
            </p>
            <div className="d-flex gap-3">
              <a href="#instagram" className="btn btn-sm btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }} aria-label="Instagram">
                <Globe size={18} />
              </a>
              <a href="#facebook" className="btn btn-sm btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }} aria-label="Facebook">
                <Share2 size={18} />
              </a>
              <a href="#twitter" className="btn btn-sm btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }} aria-label="Twitter">
                <Send size={18} />
              </a>
            </div>

          </div>

          {/* Shop Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="footer-title">Shop Collection</h6>
            <ul className="footer-links">
              <li><Link to="/shop?category=hair-oil">Hair Oils & Elixirs</Link></li>
              <li><Link to="/shop?category=shampoo">Hydrating Shampoos</Link></li>
              <li><Link to="/shop?category=hair-mask">Intensive Hair Masks</Link></li>
              <li><Link to="/shop?category=scalp-care">Scalp Care Scrubs</Link></li>
              <li><Link to="/shop?category=serum">Growth Serums</Link></li>
              <li><Link to="/shop?category=hair-kits">Curated Ritual Kits</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="footer-title">Discover VERDANT</h6>
            <ul className="footer-links">
              <li><Link to="/about">Our Philosophy</Link></li>
              <li><Link to="/ingredients">Botanical Ingredients</Link></li>
              <li><Link to="/about">Sustainability & Sourcing</Link></li>
              <li><Link to="/contact">Journal & Clinical Studies</Link></li>
              <li><Link to="/contact">Press & Recognition</Link></li>
              <li><Link to="/contact">Store Locator</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="col-lg-4 col-md-6">
            <h6 className="footer-title">Join The Botanical Club</h6>
            <p className="small text-white opacity-90 mb-3 fs-6">
              Subscribe to receive exclusive access to small-batch harvests, haircare rituals, and 15% off your initial order.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for joining the VERDANT circle!'); }} className="mb-3">
              <div className="input-group rounded-2 overflow-hidden">
                <input
                  type="email"
                  className="form-control bg-white text-dark border-0 py-2.5 px-3 fs-6"
                  style={{ backgroundColor: '#FFFFFF', color: '#193826' }}
                  placeholder="Enter your email address"
                  required
                />
                <button className="btn btn-verdant-gold text-uppercase px-3" type="submit">
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
            <span className="small text-white opacity-75" style={{ fontSize: '0.8rem' }}>
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </span>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-5 mt-5 border-top border-dark d-flex flex-column flex-md-row align-items-center justify-content-between small text-light opacity-90">
          <p className="mb-2 mb-md-0">&copy; {new Date().getFullYear()} VERDANT Botanicals Inc. All Rights Reserved.</p>
          <div className="d-flex gap-4">
            <a href="#privacy" className="text-light small">Privacy Policy</a>
            <a href="#terms" className="text-light small">Terms of Service</a>
            <a href="#shipping" className="text-light small">Shipping & Returns</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
