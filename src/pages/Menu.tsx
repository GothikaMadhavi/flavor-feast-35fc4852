import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuItems, categories } from "@/data/menuData";
import { useCart } from "@/context/CartContext";
import FoodCard from "@/components/FoodCard";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const filteredItems = activeCategory === "all"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </button>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Our <span className="text-primary">Menu</span>
          </h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/cart")}
            className="relative border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Cart
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 w-5 h-5 bg-destructive text-destructive-foreground rounded-full text-xs flex items-center justify-center font-bold"
              >
                {totalItems}
              </motion.span>
            )}
          </Button>
        </div>
      </header>

      {/* Categories */}
      <div className="sticky top-[57px] z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>
        {filteredItems.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No items in this category yet.</p>
        )}
      </main>

      {/* Floating Cart */}
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-4 left-4 right-4 max-w-md mx-auto z-50"
        >
          <Button
            onClick={() => navigate("/cart")}
            className="w-full h-14 bg-primary text-primary-foreground shadow-2xl rounded-2xl text-base font-bold hover:bg-primary/90"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            View Cart · {totalItems} item{totalItems > 1 ? "s" : ""}
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default Menu;
