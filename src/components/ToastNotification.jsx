import React from 'react';
import { CheckCircle2, Leaf } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const ToastNotification = () => {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div
      className="position-fixed bottom-0 end-0 m-4 z-3 fade-in-up"
      style={{ zIndex: 1080 }}
    >
      <div
        className="d-flex align-items-center gap-3 px-4 py-3 bg-dark text-white rounded-3 shadow-lg"
        style={{
          borderLeft: '4px solid var(--color-accent)',
          maxWidth: '380px'
        }}
      >
        <CheckCircle2 size={22} className="text-warning flex-shrink-0" />
        <div className="flex-grow-1 small">
          <span className="fw-medium d-block">{toastMessage}</span>
        </div>
      </div>
    </div>
  );
};
