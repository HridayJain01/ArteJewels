import React, { useState } from "react";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";

export default function Giftcard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleTap = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4  ">
      <motion.div
        className="relative w-full max-w-sm md:max-w-md lg:max-w-lg"
        onTap={handleTap}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ perspective: 1000 }}
      >
        <div className="relative w-full h-0 pb-[56.25%] "> {/* 16:9 Aspect Ratio */}
          <motion.div
            className="absolute inset-0 bg-[#2a264e] text-white rounded-lg shadow-lg p-6 backface-hidden "
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="text-4xl font-semibold">Happy Diwali</div>
            </div>
            <div className="mb-6">
              <div className="text-sm">Hriday Jain</div>
              <div className="text-2xl font-mono mt-4 tracking-widest">
                1234 5678 9012 3456
              </div>
            </div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="text-lg font-semibold">Worth Rs 5000</div>
              </div>
              <div className="flex flex-col items-center">
                <QRCode value="Rs 500" size={64} />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-gray-800 text-white rounded-lg shadow-lg p-6 backface-hidden"
            style={{ backfaceVisibility: "hidden", rotateY: 180 }}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <QRCode value="Rs 500" size={128} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}