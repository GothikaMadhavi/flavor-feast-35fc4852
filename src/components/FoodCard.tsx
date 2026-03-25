import { motion } from "framer-motion";
import { Star, Plus, Check } from "lucide-react";
import { MenuItem } from "@/data/menuData";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const FoodCard = ({ item }: { item: MenuItem }) => {
  const { addToCart, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const inCart = items.find((i) => i.id === item.id);

  const handleAdd = () => {
    addToCart(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border group"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2">
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${item.isVeg ? "bg-accent text-accent-foreground" : "bg-destructive text-destructive-foreground"}`}>
            {item.isVeg ? "🟢 Veg" : "🔴 Non-Veg"}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-foreground text-sm line-clamp-1">{item.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-primary">₹{item.price}</span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-warning text-warning" />
            <span className="text-sm font-medium text-foreground">{item.rating}</span>
          </div>
        </div>

        <Button
          onClick={handleAdd}
          size="sm"
          className={`w-full mt-3 font-semibold transition-all ${justAdded ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
        >
          {justAdded ? (
            <><Check className="w-4 h-4 mr-1" /> Added!</>
          ) : (
            <><Plus className="w-4 h-4 mr-1" /> Add to Cart {inCart ? `(${inCart.quantity})` : ""}</>
          )}
        </Button>
      </div>
    </motion.div>
  );
};

export default FoodCard;
