import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/917904053785?text=Hello%20Architales!%20I%27m%20interested%20in%20your%20architectural%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      aria-label="Chat with Architales on WhatsApp"
    >
      <div className="relative">
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-sm px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with Architales on WhatsApp
        </span>
        
        {/* Button */}
        <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
