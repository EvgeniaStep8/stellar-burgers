import { useEffect } from 'react';

const useEscapeKeydown = (close: () => void, isOpen: boolean): void => {
  useEffect(() => {
    const handleEscapeClose = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeClose);
      return () => {
        document.removeEventListener('keydown', handleEscapeClose);
      };
    }
  }, [close, isOpen]);
};

export default useEscapeKeydown;