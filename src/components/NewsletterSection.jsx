import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useShop();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      showToast('Welcome to the VERDANT Circle! 15% OFF code sent to your inbox.');
    }
  };

  return (
    <section className="py-5" style={{ backgroundColor: 'var(--bg-dark)', color: '#FFFFFF' }}>
      <div className="container py-5 text-center">
        <div className="max-w-2xl mx-auto" style={{ maxWidth: '650px' }}>
          
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-dark border border-secondary mb-4 text-warning">
            <Sparkles size={16} />
            <span className="small text-uppercase fw-semibold" style={{ letterSpacing: '0.15em' }}>
              The Botanical Circle
            </span>
          </div>

          <h2 className="display-4 font-serif text-white mb-3" style={{ lineHeight: '1.15' }}>
            Good hair days start here.
          </h2>

          <p className="lead text-light opacity-90 mb-4 fs-5" style={{ lineHeight: '1.6' }}>
            Join over 40,000 subscribers. Receive exclusive access to fresh seasonal harvests, clinical scalp insights, and <strong>15% OFF your first order</strong>.
          </p>

          {subscribed ? (
            <div className="p-4 bg-dark bg-opacity-75 border border-success rounded-3 text-success d-inline-flex align-items-center gap-3">
              <CheckCircle2 size={24} />
              <div className="text-start">
                <h6 className="mb-0 text-white font-serif fs-5">You're on the list!</h6>
                <span className="small text-light">Check your inbox for code <strong>VERDANT15</strong>.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row gap-2 max-w-lg mx-auto">
              <div className="input-group input-group-lg flex-grow-1 rounded-3 overflow-hidden shadow-sm">
                <span className="input-group-text bg-white border-0 text-muted ps-3"><Mail size={20} /></span>
                <input
                  type="email"
                  className="form-control bg-white text-dark border-0 px-3 fs-6"
                  style={{ backgroundColor: '#FFFFFF', color: '#193826' }}
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-verdant-gold py-3 px-4 fs-6 text-nowrap">
                Subscribe & Get 15% OFF
              </button>
            </form>
          )}

          <p className="small text-white opacity-85 mt-3 mb-0" style={{ fontSize: '0.8rem' }}>
            We respect your privacy. Unsubscribe at any time with a single click.
          </p>

        </div>
      </div>
    </section>
  );
};
