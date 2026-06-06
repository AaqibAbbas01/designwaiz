"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ConsultationForm from "@/components/ui/ConsultationForm";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 24, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 12, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#121212] p-6 lg:p-8 text-white shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dw-mustard mb-2">
                  Free Consultation
                </p>
                <h2 className="text-h2 mb-2">Book Your Design Call</h2>
                <p className="text-white/75">
                  Share a few details and we&apos;ll continue the conversation on WhatsApp right away.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 p-2 text-white/75 hover:text-white hover:border-white/30 transition-colors"
                aria-label="Close consultation popup"
              >
                <X size={20} />
              </button>
            </div>

            <ConsultationForm
              buttonLabel="Continue On WhatsApp"
              onSubmitted={onClose}
              className="rounded-xl bg-white/5 border border-white/10 p-6"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
