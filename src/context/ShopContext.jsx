import React, { createContext, useContext, useState, useEffect } from 'react';
import { products } from '../data/products';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // Load initial cart & wishlist from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('verdant_cart');
      return saved ? JSON.parse(saved) : [
        { product: products[0], quantity: 1 },
        { product: products[2], quantity: 1 }
      ];
    } catch (e) {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('verdant_wishlist');
      return saved ? JSON.parse(saved) : [products[0].id, products[6].id];
    } catch (e) {
      return [];
    }
  });

  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const [appliedPromo, setAppliedPromo] = useState(null); // { code: 'VERDANT15', discountPct: 15 }

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem('verdant_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('verdant_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${quantity}x "${product.name}" to bag`);
    setCartDrawerOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from bag');
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedPromo(null);
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from saved wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to your wishlist');
        return [...prev, productId];
      }
    });
  };

  const applyPromoCode = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'VERDANT15' || cleanCode === 'BOTANICAL15') {
      setAppliedPromo({ code: cleanCode, discountPct: 15 });
      showToast('Promo code VERDANT15 applied! (15% OFF)');
      return { success: true, message: '15% discount applied!' };
    } else if (cleanCode === 'FREESHIP') {
      setAppliedPromo({ code: cleanCode, freeShipping: true });
      showToast('Free Shipping promo applied!');
      return { success: true, message: 'Free shipping applied!' };
    } else {
      return { success: false, message: 'Invalid promo code. Try "VERDANT15"' };
    }
  };

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  
  let discount = 0;
  if (appliedPromo?.discountPct) {
    discount = (subtotal * appliedPromo.discountPct) / 100;
  }

  let shippingFee = 0;
  if (subtotal > 0 && subtotal < 75 && !appliedPromo?.freeShipping) {
    shippingFee = 10.00;
  }

  const total = Math.max(0, subtotal - discount + shippingFee);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        cartDrawerOpen,
        setCartDrawerOpen,
        toggleCartDrawer: () => setCartDrawerOpen((prev) => !prev),
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        searchQuery,
        setSearchQuery,
        toastMessage,
        showToast,
        subtotal,
        discount,
        shippingFee,
        total,
        appliedPromo,
        applyPromoCode,
        totalCartCount
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
