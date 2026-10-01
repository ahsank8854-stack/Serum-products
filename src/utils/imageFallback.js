// Universal product image fallback returning real product image asset
export const getFallbackImage = (title = 'VERDANT BOTANICALS', category = 'Hair Care') => {
  return '/images/rosemary-biotin-scalp-elixir.jpg';
};

export const handleImageError = (e, title = 'VERDANT BOTANICALS', category = 'Botanical Ritual') => {
  e.target.onerror = null; // Prevent recursion
  e.target.src = '/images/rosemary-biotin-scalp-elixir.jpg';
};

