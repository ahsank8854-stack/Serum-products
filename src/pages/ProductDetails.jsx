import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Heart, ShoppingBag, Truck, RefreshCw, ShieldCheck, Plus, Minus, ArrowLeft, Check, Share2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';

export const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart, wishlist, toggleWishlist, showToast } = useShop();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id) || products[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isVideoMode, setIsVideoMode] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
    setIsVideoMode(false);
    setQuantity(1);
  }, [id]);

  const isWishlisted = wishlist.includes(product.id);

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard!');
    }
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.categoryKey === product.categoryKey)
    .slice(0, 3);

  return (
    <div className="py-5" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container py-4">
        
        {/* Breadcrumb Back Link */}
        <div className="mb-4">
          <Link to="/shop" className="text-muted small text-decoration-none d-inline-flex align-items-center gap-1">
            <ArrowLeft size={16} /> Back to Shop Boutique
          </Link>
        </div>

        {/* Top Product Hero Row */}
        <div className="row g-5 mb-5">
          
          {/* Left: Product Gallery */}
          <div className="col-lg-6">
            <div className="d-flex flex-column-reverse flex-md-row gap-3">
              
              {/* Thumbnails */}
              <div className="d-flex flex-md-column gap-2 overflow-auto" style={{ maxHeight: '520px' }}>
                {product.motionVideo && (
                  <button
                    onClick={() => { setIsVideoMode(true); }}
                    className={`btn p-0 rounded-2 border overflow-hidden position-relative bg-dark ${
                      isVideoMode ? 'border-warning border-2' : 'border-light opacity-80'
                    }`}
                    style={{ width: '75px', height: '90px', flexShrink: 0 }}
                    title="Watch Product Motion Video"
                  >
                    <img src={product.images[0]} alt="" className="w-100 h-100 object-fit-cover opacity-60" />
                    <span className="position-absolute top-50 start-50 translate-middle badge bg-warning text-dark p-1 rounded-circle">
                      ▶
                    </span>
                  </button>
                )}

                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setIsVideoMode(false); setActiveImageIndex(idx); }}
                    className={`btn p-0 rounded-2 border overflow-hidden ${
                      !isVideoMode && activeImageIndex === idx ? 'border-success border-2' : 'border-light opacity-75'
                    }`}
                    style={{ width: '75px', height: '90px', flexShrink: 0 }}
                  >
                    <img src={img} alt="" className="w-100 h-100 object-fit-cover" />
                  </button>
                ))}
              </div>

              {/* Main Image View or Motion Video */}
              <div className="flex-grow-1 position-relative rounded-3 overflow-hidden bg-white border" style={{ minHeight: '480px', maxHeight: '550px' }}>
                {product.badge && (
                  <span
                    className="position-absolute top-0 start-0 m-3 badge-verdant badge-gold z-2"
                    style={{ fontSize: '0.8rem' }}
                  >
                    {product.badge}
                  </span>
                )}

                {isVideoMode && product.motionVideo ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-100 h-100 object-fit-cover d-block"
                    poster={product.images[0]}
                  >
                    <source src={product.motionVideo} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={product.images[activeImageIndex] || product.images[0]}
                    alt={product.name}
                    className="w-100 h-100 object-fit-cover"
                  />
                )}
              </div>

            </div>
          </div>


          {/* Right: Product Info Container */}
          <div className="col-lg-6">
            <div className="ps-lg-3">
              
              <div className="text-uppercase small fw-bold text-success mb-2" style={{ letterSpacing: '0.12em' }}>
                {product.category} &bull; {product.collection}
              </div>

              <h1 className="font-serif display-5 mb-2 text-dark">{product.name}</h1>

              {/* Ratings */}
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="d-flex align-items-center text-warning">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < Math.floor(product.rating) ? 'var(--color-accent)' : 'none'}
                      stroke="var(--color-accent)"
                    />
                  ))}
                </div>
                <span className="fw-bold fs-6">{product.rating}</span>
                <span className="text-muted small">({product.reviewsCount} verified customer reviews)</span>
              </div>

              {/* Price */}
              <div className="d-flex align-items-baseline gap-3 mb-4">
                <span className="display-6 fw-bold text-dark">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="fs-5 text-muted text-decoration-line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill small">
                  In Stock &bull; Ships within 24 hours
                </span>
              </div>

              <p className="lead fs-6 text-muted mb-4" style={{ lineHeight: '1.7' }}>
                {product.description}
              </p>

              {/* Key Quick Bullet Highlights */}
              <div className="p-3 bg-white border rounded-3 mb-4">
                <ul className="list-unstyled mb-0 small d-flex flex-column gap-2 text-dark">
                  {product.benefits.slice(0, 3).map((b, i) => (
                    <li key={i} className="d-flex align-items-center gap-2">
                      <Check size={16} className="text-success flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity Selector + Actions */}
              <div className="d-flex flex-wrap gap-3 align-items-center mb-4">
                
                {/* Quantity */}
                <div className="d-flex align-items-center border rounded-2 bg-white px-3 py-2">
                  <button
                    className="btn btn-sm p-0 text-muted"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-3 fw-bold fs-6">{quantity}</span>
                  <button
                    className="btn btn-sm p-0 text-muted"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  className="btn btn-verdant-primary py-3 px-4 flex-grow-1"
                  onClick={() => addToCart(product, quantity)}
                >
                  <ShoppingBag size={18} /> Add to Bag &bull; ${(product.price * quantity).toFixed(2)}
                </button>

                {/* Wishlist Button */}
                <button
                  className={`btn p-3 rounded-2 border ${
                    isWishlisted ? 'btn-danger text-white border-danger' : 'btn-light text-dark border-secondary'
                  }`}
                  onClick={() => toggleWishlist(product.id)}
                  title="Save to wishlist"
                >
                  <Heart size={20} fill={isWishlisted ? '#FFFFFF' : 'none'} />
                </button>

                <button
                  className="btn p-3 rounded-2 border btn-light text-dark border-secondary"
                  onClick={handleShare}
                  title="Share product"
                >
                  <Share2 size={20} />
                </button>

              </div>

              {/* Buy Now Button */}
              <button
                className="btn btn-verdant-gold w-100 py-3 mb-4 fs-6"
                onClick={handleBuyNow}
              >
                Instant Buy Now (Direct Checkout)
              </button>

              {/* Guarantees */}
              <div className="row g-3 pt-3 border-top text-muted small">
                <div className="col-4 d-flex align-items-center gap-2">
                  <Truck size={18} className="text-success" />
                  <span>Free shipping &gt;$75</span>
                </div>
                <div className="col-4 d-flex align-items-center gap-2">
                  <RefreshCw size={18} className="text-success" />
                  <span>30-Day Returns</span>
                </div>
                <div className="col-4 d-flex align-items-center gap-2">
                  <ShieldCheck size={18} className="text-success" />
                  <span>100% Organic</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Detailed Tabs Section */}
        <div className="bg-white rounded-3 p-4 p-md-5 border mb-5">
          <div className="d-flex flex-wrap gap-3 border-bottom pb-3 mb-4">
            {[
              { id: 'description', label: 'Full Description & Benefits' },
              { id: 'ingredients', label: 'Bio-Active Ingredients' },
              { id: 'howtouse', label: 'Ritual Instructions' },
              { id: 'reviews', label: `Reviews (${product.reviewsCount})` },
              { id: 'faq', label: 'Frequently Asked Questions' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`btn btn-sm rounded-pill px-4 py-2 font-serif fs-6 ${
                  activeTab === tab.id
                    ? 'btn-dark'
                    : 'btn-light text-muted bg-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'description' && (
            <div className="fade-in-up">
              <h4 className="font-serif mb-3">Formula Deep Dive</h4>
              <p className="text-muted leading-relaxed mb-4">{product.description}</p>
              
              <h5 className="font-serif mb-3">Key Benefits</h5>
              <div className="row g-3">
                {product.benefits.map((b, idx) => (
                  <div key={idx} className="col-md-6">
                    <div className="p-3 bg-light rounded-2 d-flex align-items-start gap-2">
                      <Check size={18} className="text-success mt-1 flex-shrink-0" />
                      <span className="small text-dark">{b}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ingredients' && (
            <div className="fade-in-up">
              <h4 className="font-serif mb-3">Complete Ingredients Profile</h4>
              <p className="p-3 bg-light rounded-2 font-monospace small text-dark mb-4">
                {product.ingredientsList}
              </p>
              <div className="alert alert-success d-flex align-items-center gap-3">
                <ShieldCheck size={24} />
                <span className="small">
                  Formulated without parabens, sulfates (SLS/SLES), silicones, phthalates, synthetic fragrance, or artificial colorants. Cruelty-free and vegan.
                </span>
              </div>
            </div>
          )}

          {activeTab === 'howtouse' && (
            <div className="fade-in-up">
              <h4 className="font-serif mb-3">Suggested Hair Care Ritual</h4>
              <p className="text-muted leading-relaxed mb-4 fs-6">{product.howToUse}</p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="fade-in-up">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                  <h4 className="font-serif mb-1">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-2">
                    <span className="display-6 fw-bold text-dark">{product.rating}</span>
                    <div>
                      <div className="d-flex text-warning">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="var(--color-accent)" stroke="var(--color-accent)" />
                        ))}
                      </div>
                      <span className="small text-muted">Based on {product.reviewsCount} reviews</span>
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-verdant-outline btn-sm rounded-pill"
                  onClick={() => alert('Thank you! Review submission modal initialized.')}
                >
                  Write a Review
                </button>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="fade-in-up">
              <h4 className="font-serif mb-4">Frequently Asked Questions</h4>
              {product.faqs?.length > 0 ? (
                product.faqs.map((faq, i) => (
                  <div key={i} className="mb-3 p-3 bg-light rounded-2">
                    <h6 className="fw-bold mb-2 text-dark">{faq.q}</h6>
                    <p className="small text-muted mb-0">{faq.a}</p>
                  </div>
                ))
              ) : (
                <p className="text-muted small">Have a question? Our trichology team is available 24/7 at support@verdant.com.</p>
              )}
            </div>
          )}

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-4 border-top">
            <h3 className="section-title text-center mb-4">Complementary Botanical Rituals</h3>
            <div className="row g-4">
              {relatedProducts.map((p) => (
                <div key={p.id} className="col-12 col-md-4">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
