import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CartDrawer = () => {
  const {
    cart,
    cartDrawerOpen,
    setCartDrawerOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    discount,
    shippingFee,
    total,
    appliedPromo,
    applyPromoCode
  } = useShop();

  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState(null);
  const navigate = useNavigate();

  const freeShippingThreshold = 75;
  const progressPct = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoInput) return;
    const res = applyPromoCode(promoInput);
    setPromoMessage(res);
  };

  const handleProceedCheckout = () => {
    setCartDrawerOpen(false);
    navigate('/checkout');
  };

  return (
    <>
      {/* Overlay backdrop */}
      <div
        className={`cart-drawer-overlay ${cartDrawerOpen ? 'open' : ''}`}
        onClick={() => setCartDrawerOpen(false)}
      />

      {/* Cart Drawer Panel */}
      <div className={`cart-drawer ${cartDrawerOpen ? 'open' : ''}`}>
        
        {/* Drawer Header */}
        <div className="p-4 border-bottom d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <ShoppingBag size={20} className="text-success" />
            <h5 className="mb-0 font-serif fs-4">Shopping Bag ({cart.reduce((a, b) => a + b.quantity, 0)})</h5>
          </div>
          <button
            className="btn-close shadow-none"
            onClick={() => setCartDrawerOpen(false)}
            aria-label="Close cart"
          />
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-4 py-3 bg-light border-bottom">
          <div className="d-flex justify-content-between small mb-1">
            <span className="fw-medium text-dark">
              {amountToFreeShipping === 0
                ? '🎉 Congratulations! You unlocked FREE Express Shipping'
                : `Add $${amountToFreeShipping.toFixed(2)} more for FREE Express Shipping`}
            </span>
          </div>
          <div className="progress" style={{ height: '6px' }}>
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

        {/* Cart Item List */}
        <div className="flex-grow-1 overflow-auto p-4">
          {cart.length === 0 ? (
            <div className="text-center py-5">
              <ShoppingBag size={48} className="text-muted mb-3 opacity-50" />
              <h6 className="font-serif fs-4 mb-2">Your Bag is Empty</h6>
              <p className="small text-muted mb-4">Discover our botanical elixirs and start your hair transformation today.</p>
              <button
                onClick={() => { setCartDrawerOpen(false); navigate('/shop'); }}
                className="btn btn-verdant-primary btn-sm rounded-pill px-4"
              >
                Explore Shop
              </button>
            </div>
          ) : (
            <div className="d-flex flex-column gap-3">
              {cart.map(({ product, quantity }) => (
                <div key={product.id} className="d-flex gap-3 pb-3 border-bottom align-items-center">
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => setCartDrawerOpen(false)}
                    className="flex-shrink-0"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      style={{
                        width: '75px',
                        height: '90px',
                        objectFit: 'cover',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    />
                  </Link>

                  <div className="flex-grow-1">
                    <Link
                      to={`/product/${product.id}`}
                      onClick={() => setCartDrawerOpen(false)}
                      className="text-dark fw-medium d-block text-truncate mb-1"
                      style={{ maxWidth: '200px', fontSize: '0.95rem' }}
                    >
                      {product.name}
                    </Link>
                    <div className="small text-muted mb-2">Category: {product.category}</div>

                    <div className="d-flex align-items-center justify-content-between">
                      {/* Quantity Controller */}
                      <div className="d-flex align-items-center border rounded px-2 py-1 bg-white">
                        <button
                          className="btn btn-sm p-0 text-muted"
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-2 small fw-bold">{quantity}</span>
                        <button
                          className="btn btn-sm p-0 text-muted"
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Price & Remove */}
                      <div className="text-end">
                        <span className="fw-bold text-dark d-block">
                          ${(product.price * quantity).toFixed(2)}
                        </span>
                        <button
                          className="btn btn-link p-0 text-danger text-decoration-none small"
                          onClick={() => removeFromCart(product.id)}
                          title="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-4 border-top bg-light">
            
            {/* Quick Promo Form */}
            <form onSubmit={handleApplyPromo} className="mb-3">
              <div className="input-group input-group-sm">
                <span className="input-group-text bg-white"><Tag size={14} /></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code (e.g. VERDANT15)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                />
                <button className="btn btn-dark" type="submit">Apply</button>
              </div>
              {promoMessage && (
                <div className={`small mt-1 ${promoMessage.success ? 'text-success' : 'text-danger'}`}>
                  {promoMessage.message}
                </div>
              )}
            </form>

            <div className="d-flex justify-content-between mb-1 small text-muted">
              <span>Subtotal</span>
              <span className="fw-semibold text-dark">${subtotal.toFixed(2)}</span>
            </div>

            {discount > 0 && (
              <div className="d-flex justify-content-between mb-1 small text-success">
                <span>Discount ({appliedPromo?.code})</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}

            <div className="d-flex justify-content-between mb-2 small text-muted">
              <span>Estimated Shipping</span>
              <span>{shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}</span>
            </div>

            <div className="d-flex justify-content-between mb-3 pt-2 border-top fw-bold fs-5 text-dark">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="d-flex gap-2">
              <Link
                to="/cart"
                onClick={() => setCartDrawerOpen(false)}
                className="btn btn-verdant-outline flex-fill py-2 text-center"
              >
                Bag Details
              </Link>
              <button
                onClick={handleProceedCheckout}
                className="btn btn-verdant-primary flex-fill py-2"
              >
                Checkout <ArrowRight size={16} />
              </button>
            </div>

            <div className="text-center mt-3 small text-muted d-flex align-items-center justify-content-center gap-1">
              <ShieldCheck size={14} className="text-success" />
              <span>256-bit Encrypted Checkout</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
