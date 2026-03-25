import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, Banknote, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const upiApps = [
  { id: "phonepe", name: "PhonePe", color: "bg-[hsl(270,80%,55%)]", icon: "📱" },
  { id: "paytm", name: "Paytm", color: "bg-[hsl(200,90%,50%)]", icon: "💳" },
  { id: "gpay", name: "Google Pay", color: "bg-[hsl(145,70%,40%)]", icon: "🅿️" },
];

const Payment = () => {
  const navigate = useNavigate();
  const { totalPrice, totalItems } = useCart();
  const [method, setMethod] = useState<"online" | "cod" | null>(null);
  const [selectedUpi, setSelectedUpi] = useState<string | null>(null);

  const handlePlaceOrder = () => {
    if (!method) return;
    if (method === "online" && !selectedUpi) return;
    navigate("/order-success");
  };

  const canOrder = method === "cod" || (method === "online" && selectedUpi);

  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={() => navigate("/cart")} className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-display text-2xl font-bold text-foreground">
            <span className="text-primary">Payment</span>
          </h1>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 pb-40">
        {/* Order Summary */}
        <div className="bg-card rounded-xl p-4 border border-border mb-6">
          <h2 className="font-semibold text-foreground mb-2">Order Summary</h2>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{totalItems} item{totalItems > 1 ? "s" : ""}</span>
            <span className="font-bold text-foreground">₹{totalPrice}</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-muted-foreground">Delivery</span>
            <span className="font-medium text-accent">FREE</span>
          </div>
          <div className="border-t border-border mt-3 pt-3 flex justify-between">
            <span className="font-bold text-foreground">Total</span>
            <span className="text-xl font-bold text-primary">₹{totalPrice}</span>
          </div>
        </div>

        {/* Payment Methods */}
        <h2 className="font-display text-lg font-bold text-foreground mb-4">Choose Payment Method</h2>

        <div className="space-y-3">
          {/* Online Payment */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => setMethod("online")}
            className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
              method === "online" ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/30"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Online Payment</p>
              <p className="text-xs text-muted-foreground">PhonePe, Paytm, Google Pay</p>
            </div>
          </motion.button>

          {/* UPI Options */}
          {method === "online" && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="pl-4 space-y-2">
              {upiApps.map((app) => (
                <button
                  key={app.id}
                  onClick={() => setSelectedUpi(app.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                    selectedUpi === app.id ? "border-primary bg-primary/5" : "border-border bg-card"
                  }`}
                >
                  <span className="text-2xl">{app.icon}</span>
                  <span className="font-medium text-foreground">{app.name}</span>
                  {selectedUpi === app.id && <span className="ml-auto text-primary font-bold">✓</span>}
                </button>
              ))}
            </motion.div>
          )}

          {/* Cash on Delivery */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => { setMethod("cod"); setSelectedUpi(null); }}
            className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
              method === "cod" ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/30"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Banknote className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Cash on Delivery</p>
              <p className="text-xs text-muted-foreground">Pay when your food arrives</p>
            </div>
          </motion.button>
        </div>
      </main>

      {/* Place Order */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-2xl">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <Button
            onClick={handlePlaceOrder}
            disabled={!canOrder}
            className="w-full h-12 bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 disabled:opacity-50"
          >
            <CreditCard className="w-5 h-5 mr-2" /> Place Order · ₹{totalPrice}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
