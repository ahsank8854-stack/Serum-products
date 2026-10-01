import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollRevealInit = () => {
  const location = useLocation();

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 1. Explicitly targeted elements
    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-fade-up');

    // 2. Auto-assign directional reveal classes to section columns & cards if unassigned
    const sectionRows = document.querySelectorAll('section .row, .container .row');
    sectionRows.forEach((row) => {
      const cols = Array.from(row.children);
      if (cols.length === 2) {
        if (!cols[0].classList.contains('reveal-left') && !cols[0].classList.contains('reveal-right') && !cols[0].classList.contains('reveal-fade-up')) {
          cols[0].classList.add('reveal-left');
        }
        if (!cols[1].classList.contains('reveal-left') && !cols[1].classList.contains('reveal-right') && !cols[1].classList.contains('reveal-fade-up')) {
          cols[1].classList.add('reveal-right');
        }
      } else if (cols.length > 2) {
        cols.forEach((col, index) => {
          if (!col.classList.contains('reveal-left') && !col.classList.contains('reveal-right') && !col.classList.contains('reveal-fade-up')) {
            col.classList.add('reveal-fade-up');
            col.classList.add(`stagger-${(index % 5) + 1}`);
          }
        });
      }
    });

    // 3. Auto-assign stagger & fade-up to product/ingredient/testimonial cards
    const cards = document.querySelectorAll('.product-card, .ingredient-card, .testimonial-card');
    cards.forEach((card, index) => {
      if (!card.classList.contains('reveal-left') && !card.classList.contains('reveal-right') && !card.classList.contains('reveal-fade-up')) {
        card.classList.add('reveal-fade-up');
        card.classList.add(`stagger-${(index % 4) + 1}`);
      }
    });

    // Re-query all elements after auto-assignment
    const allAnimatedElements = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-fade-up');
    allAnimatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      allAnimatedElements.forEach((el) => observer.unobserve(el));
    };
  }, [location.pathname]);

  return null;
};

