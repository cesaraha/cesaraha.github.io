import React, { useEffect } from 'react';
import styles from '../styles/Modal.module.css';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  image, 
  children, 
  imageAlt = '' 
}) => {
  const handleKeydown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscapeKey = (event) => handleKeydown(event);
      document.addEventListener('keydown', handleEscapeKey);

      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.modalOverlay}
      onClick={handleOverlayClick}
      onKeyDown={handleKeydown}
      role="dialog"
      aria-modal="true"
      tabIndex="-1"
    >
      <div className={styles.modalContent}>
        <button 
          className={styles.modalClose} 
          onClick={onClose} 
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {(title || image) && (
          <div className={styles.modalHeader}>
            {image && (
              <img 
                src={image} 
                alt={imageAlt || title} 
                className={styles.modalImage} 
              />
            )}
            {title && <h2 className={styles.modalTitle}>{title}</h2>}
          </div>
        )}

        <div className={styles.modalBody}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;