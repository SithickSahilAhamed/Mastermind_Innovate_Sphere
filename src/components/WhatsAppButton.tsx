"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Close from "@mui/icons-material/Close";
import Chat from "@mui/icons-material/Chat";
import { siteConfig } from "@/data/site";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <>
      {/* Tooltip / Chat preview */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-5 z-50 w-64 rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: "1px solid rgba(37, 211, 102, 0.3)" }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ background: "linear-gradient(135deg, #075e54, #128c7e)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white/20">
                  <Chat sx={{ fontSize: 20, color: "white" }} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">MMIS Support</p>
                  <p className="text-green-200 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close"
              >
                <Close sx={{ fontSize: 16 }} />
              </button>
            </div>

            {/* Message bubble */}
            <div className="px-4 py-4" style={{ background: "#ece5dd" }}>
              <div
                className="rounded-xl rounded-tl-none px-3 py-2 text-xs text-gray-800 max-w-[90%] shadow-sm"
                style={{ background: "white" }}
              >
                👋 Hi there! How can we help you today?
                <span className="block text-gray-400 text-[10px] mt-1 text-right">just now</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 text-white font-semibold text-sm transition-all"
              style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
            >
              <Chat sx={{ fontSize: 16 }} />
              Start Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.div
        className="fixed bottom-5 right-5 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      >
        {/* Pulse rings */}
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: "rgba(37, 211, 102, 0.35)" }}
        />
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: "rgba(37, 211, 102, 0.2)", animationDelay: "0.5s" }}
        />

        <motion.button
          onClick={() => setShowTooltip((v) => !v)}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.93 }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-shadow"
          style={{
            background: "linear-gradient(135deg, #25d366, #128c7e)",
            boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.4), 0 8px 30px rgba(37, 211, 102, 0.4)",
          }}
          aria-label="Chat on WhatsApp"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 0 4px rgba(37, 211, 102, 0.25), 0 12px 40px rgba(37, 211, 102, 0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 0 0 rgba(37, 211, 102, 0.4), 0 8px 30px rgba(37, 211, 102, 0.4)";
          }}
        >
          {/* WhatsApp SVG icon */}
          <svg
            viewBox="0 0 32 32"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
          >
            <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.76 1.8 6.76L2 30l7.46-1.76A13.92 13.92 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.44 11.44 0 01-5.84-1.6l-.42-.25-4.42 1.04 1.06-4.3-.27-.44A11.5 11.5 0 1116 27.5zm6.3-8.62c-.34-.17-2.03-1-2.34-1.12-.32-.11-.55-.17-.78.17-.23.34-.88 1.12-1.08 1.35-.2.22-.4.25-.74.08-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.22-.34.34-.56.11-.22.06-.42-.03-.59-.08-.17-.78-1.88-1.07-2.58-.28-.68-.57-.59-.78-.6h-.67c-.22 0-.59.08-.9.4-.31.33-1.18 1.15-1.18 2.81 0 1.66 1.21 3.27 1.38 3.5.17.22 2.38 3.63 5.77 5.09.81.35 1.44.56 1.93.71.81.26 1.55.22 2.14.13.65-.1 2.03-.83 2.31-1.63.29-.8.29-1.49.2-1.63-.08-.14-.31-.22-.65-.39z" />
          </svg>
        </motion.button>
      </motion.div>
    </>
  );
}
