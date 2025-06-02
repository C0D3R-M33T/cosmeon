import React from 'react';
import { BlogCardProps } from '../BlogSection';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardData: BlogCardProps | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, cardData }) => {
  if (!cardData) return null;

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? 'bg-black/70 opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-zinc-900 text-white rounded-2xl w-[90%] max-w-xl p-8 relative transition-transform duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl font-bold hover:text-red-400 transition"
        >
          ×
        </button>
        {cardData.imageSrc && (
          <img
            src={cardData.imageSrc}
            alt={cardData.title}
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
        )}
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-zinc-800 p-2 rounded-xl">{cardData.icon}</div>
          <p className="text-xs uppercase text-zinc-400 tracking-wider">{cardData.date}</p>
        </div>
        <h3 className="text-2xl font-bold mb-2">{cardData.title}</h3>
        <p className="text-sm text-zinc-400 mb-4 whitespace-pre-line">{cardData.fullContent}</p>
        <div className="text-xs uppercase text-blue-500 tracking-wider">{cardData.category}</div>
      </div>
    </div>
  );
};

export default Modal;
