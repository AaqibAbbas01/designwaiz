"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hi, I'm interested in interior design services from DesignWaiz."
    );
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 animate-wa-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </button>
  );
}
