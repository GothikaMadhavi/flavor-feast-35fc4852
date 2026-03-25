import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background font-sans flex flex-col items-center justify-center gap-6 px-4">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-8xl">🛒</motion.div>
        <h2 className="font-display text-2xl font-bold text-foreground">Your cart is empty</h2>
        <p className="text-muted-foreground">Add some delicious items to get started!</p>
        <Button onClick={() => navigate("/menu")} className="bg-primary text-primary-foreground">
          <ArrowLeft className="w-4 h-4 mr-2" /> Browse Menu
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => navigate("/menu")} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Menu</span>
          </button>
          <h1 className="font-display text-2xl font-bold text-foreground">Your <span className="text-primary">Cart</span></h1>
          <span className="text-sm text-muted-foreground">{totalItems} items</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 pb-40">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20, height: 0 }}
              className="flex gap-4 bg-card rounded-xl p-3 mb-3 border border-border shadow-sm"
            >
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" loading="lazy" />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-sm truncate">{item.name}</h3>
                <p className="text-primary font-bold mt-1">₹{item.price * item.quantity}</p>
                <div className="flex items-center gap-3 mt-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-semibold text-foreground w-6 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="self-start text-destructive hover:text-destructive/80 p-1">
                <Trash2 className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </main>

      {/* Bottom checkout bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-2xl">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-muted-foreground font-medium">Total</span>
            <span className="text-2xl font-bold text-foreground">₹{totalPrice}</span>
          </div>
          <Button onClick={() => navigate("/payment")} className="w-full h-12 bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90">
            <ShoppingBag className="w-5 h-5 mr-2" /> Proceed to Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
