"use client";

import React, { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function ProjectModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleDismiss = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [handleDismiss]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 flex items-start justify-center">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleDismiss}
          className="fixed inset-0 bg-pencil/60 backdrop-blur-sm z-0"
        />

        {/* Modal Container Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-6xl bg-paper border-[4px] border-pencil shadow-hard-lg p-6 sm:p-8 md:p-10 my-auto wobbly-border-1 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            aria-label="Close Project Details"
            className="absolute top-4 right-4 p-2.5 bg-accent-red text-white border-2 border-pencil rounded-full shadow-hard-sm hover:rotate-12 hover:scale-110 transition-all z-20"
          >
            <X size={24} strokeWidth={3} />
          </button>

          {/* Children Content */}
          <div className="pt-4">{children}</div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
