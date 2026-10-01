import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ArrowLeft, Tag, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CartPage = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    discount,
    shippingFee,
    total,
    appliedPromo,
    applyPromoCode
  } = useShop();

  const [promoCode, setPromoCode] = useState('');
  const [promoFeedback, setPromoFeedback] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const freeShippingThreshold = 75;
  const progressPct = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handlePromoSubmit = (e) => {
    e.preventDefault();
    if (!promoCode) return;
    const res = applyPromoCode(promoCode);
    setPromoFeedback(res);
  };

  if (cart.length === 0) {
    return (
      <div className="py-5 text-center" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '70vh' }}>
        <div className="container py-5">
          <ShoppingBag size={64} className="text-muted mb-3 opacity-40" />
          <h1 className="font-serif display-5 mb-3 text-dark">Your Shopping Bag is Empty</h1>
          <p className="lead text-muted mb-4 max-w-md mx-auto" style={{ maxWidth: '500px' }}>
            Elevate your daily haircare ritual with our cold-pressed organic elixirs and bioactive scalp treatments.
          </p>
          <Link to="/shop" className="btn btn-verdant-primary py-3 px-5 fs-6">
            Explore Botanical Boutique <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-5" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '80vh' }}>
      <div className="container py-4">
        
        {/* Page Title & Breadcrumb */}
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between pb-4 mb-4 border-bottom">
          <div>
            <span className="section-tag">Bag Review</span>
            <h1 className="section-title mb-0">Your Botanical Order</h1>
          </div>
          <Link to="/shop" className="text-muted small text-decoration-none d-inline-flex align-items-center gap-1 mt-2 mt-md-0">
            <ArrowLeft size={16} /> Continue Shopping
          </Link>
        </div>

        {/* Free Shipping Progress Banner */}
        <div className="p-4 bg-white rounded-3 border mb-4 shadow-sm">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="fw-bold text-dark small">
              {amountToFreeShipping === 0
                ? '🎉 Congratulations! You unlocked FREE Express Shipping'
                : `Add $${amountToFreeShipping.toFixed(2)} more to unlock FREE Express Shipping`}
            </span>
            <span className="small text-muted">{progressPct.toFixed(0)}%</span>
          </div>
          <div className="progress" style={{ height: '8px' }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${progressPct}%`,
                backgroundColor: 'var(--color-accent)',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
        </div>

        <div className="row g-5">
          
          {/* Cart Items Table / List */}
          <div className="col-lg-8">
            <div className="bg-white rounded-3 border p-4 shadow-sm">
              <div className="d-flex align-items-center justify-content-between pb-3 border-bottom mb-4">
                <h4 className="font-serif mb-0 text-dark">Items in Bag ({cart.reduce((a, b) => a + b.quantity, 0)})</h4>
                <button
                  onClick={clearCart}
                  className="btn btn-sm btn-link text-danger text-decoration-none p-0 d-flex align-items-center gap-1"
                >
                  <Trash2 size={14} /> Clear All
                </button>
              </div>

              <div className="d-flex flex-column gap-4">
                {cart.map(({ product, quantity }) => (
                  <div key={product.id} className="row align-items-center border-bottom pb-4 g-3">
                    
                    {/* Image */}
                    <div className="col-3 col-sm-2">
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-100 rounded-2 object-fit-cover"
                          style={{ height: '100px' }}
                        />
                      </Link>
                    </div>

                    {/* Description */}
                    <div className="col-9 col-sm-5">
                      <div className="small text-uppercase text-success fw-bold" style={{ fontSize: '0.7rem' }}>
                        {product.category}
                      </div>
                      <Link to={`/product/${product.id}`} className="text-dark fw-bold text-decoration-none font-serif fs-5 d-block mb-1">
                        {product.name}
                      </Link>
                      <div className="text-muted small">${product.price.toFixed(2)} each</div>
                    </div>

                    {/* Quantity Controller */}
                    <div className="col-6 col-sm-3">
                      <div className="d-inline-flex align-items-center border rounded-2 px-3 py-1 bg-light">
                        <button
                          className="btn btn-sm p-0 text-muted"
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 fw-bold">{quantity}</span>
                        <button
                          className="btn btn-sm p-0 text-muted"
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Total & Remove */}
                    <div className="col-6 col-sm-2 text-end">
                      <div className="fw-bold fs-5 text-dark">${(product.price * quantity).toFixed(2)}</div>
                      <button
                        className="btn btn-sm btn-link text-muted text-decoration-none p-0"
                        onClick={() => removeFromCart(product.id)}
                        title="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Summary Panel */}
          <div className="col-lg-4">
            <div className="bg-white rounded-3 border p-4 shadow-sm position-sticky" style={{ top: '100px' }}>
              <h4 className="font-serif mb-4 text-dark border-bottom pb-3">Order Summary</h4>

              {/* Promo code form */}
              <form onSubmit={handlePromoSubmit} className="mb-4">
                <label className="form-label small fw-bold text-muted">Promo Code / Voucher</label>
                <div className="input-group">
                  <span className="input-group-text bg-light"><Tag size={16} /></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="VERDANT15"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button className="btn btn-dark" type="submit">Apply</button>
                </div>
                {promoFeedback && (
                  <div className={`small mt-1 ${promoFeedback.success ? 'text-success' : 'text-danger'}`}>
                    {promoFeedback.message}
                  </div>
                )}
              </form>

              <div className="d-flex justify-content-between mb-2 text-muted">
                <span>Subtotal</span>
                <span className="fw-bold text-dark">${subtotal.toFixed(2)}</span>
              </div>

              {discount > 0 && (
                <div className="d-flex justify-content-between mb-2 text-success">
                  <span>Discount ({appliedPromo?.code})</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}

              <div className="d-flex justify-content-between mb-3 text-muted">
                <span>Shipping</span>
                <span>{shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}</span>
              </div>

              <div className="d-flex justify-content-between pt-3 border-top mb-4 display-6 fw-bold text-dark fs-3">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="btn btn-verdant-primary w-100 py-3 mb-3 fs-6"
              >
                Proceed to Checkout <ArrowRight size={18} />
              </button>

              <div className="text-center small text-muted d-flex align-items-center justify-content-center gap-1">
                <ShieldCheck size={16} className="text-success" />
                <span>256-bit SSL Secure Checkout</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
