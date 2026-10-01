import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { handleImageError } from '../utils/imageFallback';

export const ProductCard = ({ product }) => {
  const { addToCart, wishlist, toggleWishlist } = useShop();
  const [isHovered, setIsHovered] = useState(false);

  const isWishlisted = wishlist.includes(product.id);

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Image Container with Smooth Zoom Hover Transition */}
      <div className="product-image-container position-relative">
        
        {/* Wishlist Button */}
        <button
          className={`product-wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          aria-label="Save to wishlist"
          title={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart size={18} fill={isWishlisted ? '#FFFFFF' : 'none'} />
        </button>

        {/* Badge */}
        <div className="product-badge-wrapper d-flex flex-column gap-1">
          {product.badge && (
            <span className={`badge-verdant ${product.badge === 'Award Winner' || product.badge === 'Bestseller' ? 'badge-gold' : ''}`}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Images (Clean image display with hover swap) */}
        <Link to={`/product/${product.id}`} className="d-block w-100 h-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-image primary"
            loading="lazy"
            onError={(e) => handleImageError(e, product.name, product.category)}
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} lifestyle`}
              className="product-image hover-image"
              loading="lazy"
              onError={(e) => handleImageError(e, product.name, product.category)}
            />
          )}
        </Link>
      </div>

      {/* Details Container */}
      <div className="product-details">
        
        <div className="product-category">{product.category}</div>

        <Link to={`/product/${product.id}`} className="text-decoration-none">
          <h3 className="product-title">{product.name}</h3>
        </Link>

        {/* Rating Stars */}
        <div className="product-rating">
          <div className="d-flex align-items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < Math.floor(product.rating) ? 'var(--color-accent)' : 'none'}
                stroke="var(--color-accent)"
              />
            ))}
          </div>
          <span className="rating-count">({product.reviewsCount})</span>
        </div>

        <p className="small text-muted mb-3 text-truncate" style={{ maxWidth: '100%' }}>
          {product.shortDescription}
        </p>

        {/* Price & Add to Cart Action */}
        <div className="product-price-row">
          <div>
            <span className="product-price">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="product-original-price">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <button
            className="btn-add-cart"
            onClick={() => addToCart(product, 1)}
            aria-label="Add to cart"
          >
            <ShoppingBag size={15} />
            <span>Add to Bag</span>
          </button>
        </div>

      </div>
    </div>
  );
};
