import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { CheckCircle, Package, Truck, Home, PartyPopper } from "lucide-react";

const steps = [
  { icon: CheckCircle, label: "Order Confirmed", time: "Just now" },
  { icon: Package, label: "Preparing Food", time: "~10 min" },
  { icon: Truck, label: "Out for Delivery", time: "~25 min" },
  { icon: Home, label: "Delivered", time: "~35 min" },
];

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    // Confetti blast
    const duration = 3000;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: ["#f97316", "#eab308", "#22c55e"] });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ["#f97316", "#eab308", "#22c55e"] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
    clearCart();

    // Animate steps
    const timers = steps.slice(1).map((_, i) =>
      setTimeout(() => setActiveStep(i + 1), (i + 1) * 2000)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="text-center"
      >
        <div className="relative inline-block mb-6">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-7xl"
          >
            🎉
          </motion.div>
        </div>

        <h1 className="font-display text-3xl font-bold text-foreground mb-2">Order Placed Successfully!</h1>
        <p className="text-muted-foreground mb-8">Your delicious food is on its way</p>
      </motion.div>

      {/* Order Tracking */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-sm bg-card rounded-2xl p-6 border border-border shadow-lg"
      >
        <h2 className="font-display text-lg font-bold text-foreground mb-6 flex items-center gap-2">
          <PartyPopper className="w-5 h-5 text-primary" /> Order Tracking
        </h2>

        <div className="space-y-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = i <= activeStep;
            const isLast = i === steps.length - 1;
            return (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.4 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 ${
                      isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  {!isLast && (
                    <div className={`w-0.5 h-8 transition-colors duration-500 ${i < activeStep ? "bg-primary" : "bg-border"}`} />
                  )}
                </div>
                <div className="pt-2">
                  <p className={`font-semibold text-sm ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</p>
                  <p className="text-xs text-muted-foreground">{step.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-8">
        <Button onClick={() => navigate("/menu")} className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
          🍽️ Order More
        </Button>
      </motion.div>
    </div>
  );
};

export default OrderSuccess;
