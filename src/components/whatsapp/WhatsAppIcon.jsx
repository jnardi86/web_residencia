import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/+5491140746086"
      className="fixed bottom-4 right-4 bg-Green text-White p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 duration-1000 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="text-4xl" />
    </a>
  );
};

export default WhatsAppIcon;

