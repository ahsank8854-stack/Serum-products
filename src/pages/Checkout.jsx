import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { ShieldCheck, Lock, CreditCard, CheckCircle2, ArrowRight, Truck, Leaf, AlertCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Checkout = () => {
  const { cart, subtotal, discount, shippingFee, total, clearCart, appliedPromo } = useShop();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    email: 'eleanor.vance@example.com',
    phone: '+1 (555) 234-5678',
    firstName: 'Eleanor',
    lastName: 'Vance',
    address: '742 Evergreen Terrace',
    apartment: 'Apt 4B',
    city: 'San Francisco',
    country: 'United States',
    postalCode: '94102',
    deliveryMethod: 'standard',
    paymentMethod: 'credit-card',
    cardNumber: '4532 8921 7731 9012',
    cardExpiry: '12/28',
    cardCvc: '882'
  });

  const [deliveryOption, setDeliveryOption] = useState('standard'); // standard or express
  const [orderComplete, setOrderComplete] = useState(false);
  const [completedOrderDetails, setCompletedOrderDetails] = useState(null);

  const selectedShippingFee = deliveryOption === 'express' ? 15.00 : shippingFee;
  const finalTotal = subtotal - discount + selectedShippingFee;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName || !formData.address || !formData.city) {
      alert('Please complete all required shipping fields.');
      return;
    }

    const orderId = 'VRD-' + Math.floor(100000 + Math.random() * 900000);
    const orderObj = {
      orderId,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      items: [...cart],
      total: finalTotal,
      shippingAddress: `${formData.address}, ${formData.city}, ${formData.country} ${formData.postalCode}`,
      customerName: `${formData.firstName} ${formData.lastName}`,
      customerEmail: formData.email
    };

    setCompletedOrderDetails(orderObj);
    setOrderComplete(true);
    clearCart();

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback if canvas not available
    }
  };

  if (orderComplete && completedOrderDetails) {
    return (
      <div className="py-5 text-center" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '80vh' }}>
        <div className="container py-5 max-w-lg mx-auto" style={{ maxWidth: '640px' }}>
          <div className="p-5 bg-white rounded-3 border shadow-lg fade-in-up">
            <div className="p-3 bg-success bg-opacity-10 text-success rounded-circle d-inline-flex mb-3">
              <CheckCircle2 size={48} />
            </div>
            
            <span className="section-tag">Order Confirmed</span>
            <h1 className="font-serif display-5 text-dark mb-2">Thank You For Your Order!</h1>
            <p className="text-muted small mb-4">
              Order Number: <strong className="text-dark">{completedOrderDetails.orderId}</strong> &bull; Confirmation sent to <strong>{completedOrderDetails.customerEmail}</strong>
            </p>

            <div className="p-4 bg-light rounded-3 text-start mb-4">
              <h6 className="font-serif fs-5 text-dark mb-3">Order Receipt Summary</h6>
              <div className="d-flex flex-column gap-2 border-bottom pb-3 mb-3">
                {completedOrderDetails.items.map(({ product, quantity }) => (
                  <div key={product.id} className="d-flex justify-content-between small">
                    <span>{quantity}x {product.name}</span>
                    <span className="fw-bold">${(product.price * quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="d-flex justify-content-between fw-bold text-dark fs-5">
                <span>Total Paid</span>
                <span>${completedOrderDetails.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="p-3 bg-white border border-success rounded-3 text-start mb-4 small d-flex align-items-center gap-3">
              <Truck size={24} className="text-success flex-shrink-0" />
              <div>
                <strong className="d-block text-dark">Estimated Express Delivery</strong>
                <span className="text-muted">Expected arrival by <strong>3 business days</strong>. Tracking number will follow via SMS.</span>
              </div>
            </div>

            <Link to="/" className="btn btn-verdant-primary w-100 py-3 fs-6">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="py-5 text-center" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '60vh' }}>
        <div className="container py-5">
          <h2 className="font-serif mb-3">No Items to Checkout</h2>
          <p className="text-muted mb-4">Your shopping bag is currently empty.</p>
          <Link to="/shop" className="btn btn-verdant-primary py-3 px-4">
            Shop Botanical Boutique
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-5" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '80vh' }}>
      <div className="container py-4">
        
        {/* Page Header */}
        <div className="pb-4 mb-4 border-bottom">
          <span className="section-tag">Encrypted Checkout</span>
          <h1 className="section-title mb-0">Complete Your Botanical Order</h1>
        </div>

        <form onSubmit={handlePlaceOrder}>
          <div className="row g-5">
            
            {/* Left: Contact, Shipping, Payment Forms */}
            <div className="col-lg-7">
              <div className="d-flex flex-column gap-4">
                
                {/* 1. Contact Information */}
                <div className="p-4 bg-white rounded-3 border shadow-sm">
                  <h4 className="font-serif fs-4 mb-3 text-dark">1. Contact Information</h4>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">Phone Number (For SMS Tracking)</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Shipping Address */}
                <div className="p-4 bg-white rounded-3 border shadow-sm">
                  <h4 className="font-serif fs-4 mb-3 text-dark">2. Shipping Address</h4>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-bold text-muted">Street Address *</label>
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">Apt, Suite, Unit (Optional)</label>
                      <input
                        type="text"
                        name="apartment"
                        className="form-control"
                        value={formData.apartment}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">City *</label>
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">Country *</label>
                      <select
                        name="country"
                        className="form-select"
                        value={formData.country}
                        onChange={handleChange}
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="France">France</option>
                        <option value="Australia">Australia</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">Postal / Zip Code *</label>
                      <input
                        type="text"
                        name="postalCode"
                        className="form-control"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Delivery Method */}
                <div className="p-4 bg-white rounded-3 border shadow-sm">
                  <h4 className="font-serif fs-4 mb-3 text-dark">3. Delivery Method</h4>
                  <div className="d-flex flex-column gap-2">
                    <label
                      className={`p-3 border rounded-3 d-flex align-items-center justify-content-between cursor-pointer ${
                        deliveryOption === 'standard' ? 'border-success bg-light' : ''
                      }`}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <input
                          type="radio"
                          name="deliveryMethod"
                          checked={deliveryOption === 'standard'}
                          onChange={() => setDeliveryOption('standard')}
                        />
                        <div>
                          <strong className="d-block text-dark">Standard Eco Courier (3–5 Business Days)</strong>
                          <span className="small text-muted">Climate neutral ground delivery</span>
                        </div>
                      </div>
                      <span className="fw-bold">{shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}</span>
                    </label>

                    <label
                      className={`p-3 border rounded-3 d-flex align-items-center justify-content-between cursor-pointer ${
                        deliveryOption === 'express' ? 'border-success bg-light' : ''
                      }`}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <input
                          type="radio"
                          name="deliveryMethod"
                          checked={deliveryOption === 'express'}
                          onChange={() => setDeliveryOption('express')}
                        />
                        <div>
                          <strong className="d-block text-dark">Priority Air Express (1–2 Business Days)</strong>
                          <span className="small text-muted">Handled with thermal protection</span>
                        </div>
                      </div>
                      <span className="fw-bold">$15.00</span>
                    </label>
                  </div>
                </div>

                {/* 4. Payment Method Simulation */}
                <div className="p-4 bg-white rounded-3 border shadow-sm">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h4 className="font-serif fs-4 mb-0 text-dark">4. Secure Payment</h4>
                    <span className="small text-muted d-flex align-items-center gap-1">
                      <Lock size={14} className="text-success" /> 256-bit Encrypted
                    </span>
                  </div>

                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label small fw-bold text-muted">Card Number *</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light"><CreditCard size={18} /></span>
                        <input
                          type="text"
                          name="cardNumber"
                          className="form-control"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-6">
                      <label className="form-label small fw-bold text-muted">Expiration Date *</label>
                      <input
                        type="text"
                        name="cardExpiry"
                        className="form-control"
                        value={formData.cardExpiry}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-6">
                      <label className="form-label small fw-bold text-muted">CVC / CVV *</label>
                      <input
                        type="text"
                        name="cardCvc"
                        className="form-control"
                        value={formData.cardCvc}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Order Summary Sidebar */}
            <div className="col-lg-5">
              <div className="bg-white rounded-3 border p-4 shadow-sm position-sticky" style={{ top: '100px' }}>
                <h4 className="font-serif mb-4 text-dark border-bottom pb-3">Order Summary ({cart.length})</h4>

                {/* Items preview list */}
                <div className="d-flex flex-column gap-3 mb-4 max-h-64 overflow-auto border-bottom pb-3">
                  {cart.map(({ product, quantity }) => (
                    <div key={product.id} className="d-flex align-items-center gap-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="rounded-2 object-fit-cover"
                        style={{ width: '55px', height: '65px' }}
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-0 text-dark small fw-bold text-truncate" style={{ maxWidth: '180px' }}>
                          {product.name}
                        </h6>
                        <span className="small text-muted">Qty: {quantity}</span>
                      </div>
                      <span className="fw-bold small text-dark">${(product.price * quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="d-flex justify-content-between mb-2 text-muted small">
                  <span>Subtotal</span>
                  <span className="fw-bold text-dark">${subtotal.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                  <div className="d-flex justify-content-between mb-2 text-success small">
                    <span>Discount ({appliedPromo?.code})</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="d-flex justify-content-between mb-3 text-muted small">
                  <span>Shipping ({deliveryOption})</span>
                  <span>{selectedShippingFee === 0 ? 'FREE' : `$${selectedShippingFee.toFixed(2)}`}</span>
                </div>

                <div className="d-flex justify-content-between pt-3 border-top mb-4 display-6 fw-bold text-dark fs-3">
                  <span>Total Due</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>

                <button type="submit" className="btn btn-verdant-gold w-100 py-3 mb-3 fs-6">
                  Place Order &bull; ${finalTotal.toFixed(2)}
                </button>

                <div className="text-center small text-muted d-flex align-items-center justify-content-center gap-2">
                  <ShieldCheck size={16} className="text-success" />
                  <span>30-Day Money-Back Guarantee Included</span>
                </div>
              </div>
            </div>

          </div>
        </form>

      </div>
    </div>
  );
};
