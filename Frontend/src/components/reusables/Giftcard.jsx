import React, { useState } from "react";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";

export default function Giftcard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleTap = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col font-sans items-center justify-center min-h-screen p-4">
      <motion.div
        className="relative w-full max-w-sm md:max-w-md lg:max-w-lg"
        onTap={handleTap}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ perspective: 1000 }}
      >
        <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
          <motion.div
            className="absolute inset-0 bg-[#2a264e] text-white rounded-lg shadow-lg p-6 backface-hidden bg-cards-pattern bg-cover bg-center"
            style={{ backfaceVisibility: "hidden" }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex justify-between items-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="text-4xl font-semibold">Happy Diwali, Hriday Jain</div>
            </motion.div>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="text-2xl font-mono mt-12 tracking-widest">
                1234 5678 9012 3456
              </div>
            </motion.div>
            <motion.div
              className="flex justify-between items-center mt-10 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div>
                <div className="text-lg font-semibold">Worth Rs 5000</div>
              </div>
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <QRCode value="Rs 500" size={64} />
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-gray-800 text-white rounded-lg shadow-lg p-6 backface-hidden"
            style={{ backfaceVisibility: "hidden", rotateY: 180 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex flex-col justify-center items-center h-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <QRCode value="Rs 500" size={128} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}