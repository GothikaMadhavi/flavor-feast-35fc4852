export interface MenuItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  isVeg: boolean;
}

export const menuItems: MenuItem[] = [
  // Veg items
  { id: "v1", name: "Paneer Butter Masala", price: 220, rating: 4.5, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop", category: "veg", isVeg: true },
  { id: "v2", name: "Dal Tadka", price: 160, rating: 4.3, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop", category: "veg", isVeg: true },
  { id: "v3", name: "Veg Biryani", price: 200, rating: 4.4, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop", category: "veg", isVeg: true },
  { id: "v4", name: "Palak Paneer", price: 210, rating: 4.2, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop", category: "veg", isVeg: true },
  { id: "v5", name: "Aloo Gobi", price: 150, rating: 4.0, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop", category: "veg", isVeg: true },
  { id: "v6", name: "Chole Bhature", price: 140, rating: 4.6, image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400&h=300&fit=crop", category: "veg", isVeg: true },
  { id: "v7", name: "Malai Kofta", price: 230, rating: 4.4, image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400&h=300&fit=crop", category: "veg", isVeg: true },
  { id: "v8", name: "Paneer Tikka", price: 200, rating: 4.5, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop", category: "veg", isVeg: true },
  
  { id: "v10", name: "Rajma Chawal", price: 150, rating: 4.5, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop", category: "veg", isVeg: true },

  // Non-Veg items
  { id: "nv1", name: "Chicken Biryani", price: 280, rating: 4.7, image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop", category: "nonveg", isVeg: false },
  { id: "nv2", name: "Butter Chicken", price: 300, rating: 4.8, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop", category: "nonveg", isVeg: false },
  { id: "nv3", name: "Mutton Rogan Josh", price: 350, rating: 4.5, image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&h=300&fit=crop", category: "nonveg", isVeg: false },
  { id: "nv4", name: "Fish Curry", price: 260, rating: 4.3, image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=300&fit=crop", category: "nonveg", isVeg: false },
  { id: "nv5", name: "Tandoori Chicken", price: 320, rating: 4.6, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop", category: "nonveg", isVeg: false },
  { id: "nv6", name: "Chicken Tikka Masala", price: 290, rating: 4.7, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop", category: "nonveg", isVeg: false },
  { id: "nv7", name: "Prawn Masala", price: 380, rating: 4.6, image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=400&h=300&fit=crop", category: "nonveg", isVeg: false },
  { id: "nv8", name: "Egg Curry", price: 180, rating: 4.2, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop", category: "nonveg", isVeg: false },
  { id: "nv9", name: "Chicken Korma", price: 310, rating: 4.5, image: "https://images.unsplash.com/photo-1545247181-516773cae754?w=400&h=300&fit=crop", category: "nonveg", isVeg: false },
  { id: "nv10", name: "Mutton Biryani", price: 360, rating: 4.8, image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=400&h=300&fit=crop", category: "nonveg", isVeg: false },

  // Noodles
  { id: "n1", name: "Hakka Noodles", price: 150, rating: 4.2, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop", category: "noodles", isVeg: true },
  { id: "n2", name: "Schezwan Noodles", price: 170, rating: 4.4, image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop", category: "noodles", isVeg: true },
  { id: "n3", name: "Chicken Chow Mein", price: 190, rating: 4.5, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop", category: "noodles", isVeg: false },
  { id: "n4", name: "Pad Thai", price: 220, rating: 4.6, image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop", category: "noodles", isVeg: false },
  { id: "n5", name: "Maggi Masala", price: 80, rating: 4.3, image: "https://images.unsplash.com/photo-1632709810780-b5a4343cebec?w=400&h=300&fit=crop", category: "noodles", isVeg: true },
  { id: "n6", name: "Singapore Noodles", price: 200, rating: 4.4, image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop", category: "noodles", isVeg: false },
  { id: "n7", name: "Garlic Noodles", price: 160, rating: 4.1, image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop", category: "noodles", isVeg: true },
  { id: "n8", name: "Egg Noodles", price: 140, rating: 4.2, image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop", category: "noodles", isVeg: false },

  // Pizza
  { id: "p1", name: "Margherita Pizza", price: 250, rating: 4.3, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop", category: "pizza", isVeg: true },
  { id: "p2", name: "Pepperoni Pizza", price: 350, rating: 4.7, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop", category: "pizza", isVeg: false },
  { id: "p3", name: "BBQ Chicken Pizza", price: 380, rating: 4.6, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop", category: "pizza", isVeg: false },
  { id: "p4", name: "Veggie Supreme", price: 300, rating: 4.4, image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400&h=300&fit=crop", category: "pizza", isVeg: true },
  { id: "p5", name: "Cheese Burst Pizza", price: 330, rating: 4.5, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop", category: "pizza", isVeg: true },
  { id: "p6", name: "Farmhouse Pizza", price: 310, rating: 4.3, image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=300&fit=crop", category: "pizza", isVeg: true },
  { id: "p7", name: "Chicken Tikka Pizza", price: 370, rating: 4.6, image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop", category: "pizza", isVeg: false },
  { id: "p8", name: "Paneer Makhani Pizza", price: 320, rating: 4.4, image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400&h=300&fit=crop", category: "pizza", isVeg: true },

  // Burger
  { id: "b1", name: "Classic Veg Burger", price: 120, rating: 4.1, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop", category: "burger", isVeg: true },
  { id: "b2", name: "Chicken Burger", price: 160, rating: 4.5, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", category: "burger", isVeg: false },
  { id: "b3", name: "Double Cheese Burger", price: 200, rating: 4.6, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop", category: "burger", isVeg: false },
  { id: "b4", name: "Paneer Tikka Burger", price: 150, rating: 4.3, image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop", category: "burger", isVeg: true },
  { id: "b5", name: "Spicy Chicken Burger", price: 180, rating: 4.5, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop", category: "burger", isVeg: false },
  { id: "b6", name: "Aloo Tikki Burger", price: 100, rating: 4.2, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop", category: "burger", isVeg: true },
  { id: "b7", name: "Fish Fillet Burger", price: 190, rating: 4.4, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop", category: "burger", isVeg: false },
  { id: "b8", name: "BBQ Bacon Burger", price: 220, rating: 4.7, image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop", category: "burger", isVeg: false },

  // Drinks
  { id: "d1", name: "Chocolate Thick Shake", price: 130, rating: 4.6, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop", category: "drinks", isVeg: true },
  { id: "d2", name: "Cold Coffee", price: 100, rating: 4.4, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop", category: "drinks", isVeg: true },
  { id: "d4", name: "Strawberry Shake", price: 120, rating: 4.6, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop", category: "drinks", isVeg: true },
  { id: "d6", name: "Oreo Shake", price: 140, rating: 4.5, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop", category: "drinks", isVeg: true },
  { id: "d7", name: "Watermelon Juice", price: 70, rating: 4.3, image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400&h=300&fit=crop", category: "drinks", isVeg: true },
  { id: "d8", name: "Mojito", price: 110, rating: 4.4, image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop", category: "drinks", isVeg: true },
  { id: "d9", name: "Buttermilk", price: 50, rating: 4.2, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop", category: "drinks", isVeg: true },
  { id: "d10", name: "Hot Chocolate", price: 130, rating: 4.6, image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=300&fit=crop", category: "drinks", isVeg: true },

  // Ice Cream
  { id: "ic1", name: "Chocolate Sundae", price: 150, rating: 4.7, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop", category: "icecream", isVeg: true },
  { id: "ic2", name: "Butterscotch Scoop", price: 90, rating: 4.3, image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop", category: "icecream", isVeg: true },
  { id: "ic3", name: "Mango Ice Cream", price: 100, rating: 4.5, image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&h=300&fit=crop", category: "icecream", isVeg: true },
  { id: "ic4", name: "Kulfi", price: 70, rating: 4.6, image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=300&fit=crop", category: "icecream", isVeg: true },
  { id: "ic5", name: "Vanilla Waffle Cone", price: 110, rating: 4.4, image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop", category: "icecream", isVeg: true },
  { id: "ic6", name: "Strawberry Gelato", price: 130, rating: 4.5, image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=400&h=300&fit=crop", category: "icecream", isVeg: true },
  { id: "ic7", name: "Pista Ice Cream", price: 120, rating: 4.4, image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?w=400&h=300&fit=crop", category: "icecream", isVeg: true },
  { id: "ic8", name: "Cookie Dough Scoop", price: 140, rating: 4.6, image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=400&h=300&fit=crop", category: "icecream", isVeg: true },
  { id: "ic9", name: "Choco Lava Cake Cup", price: 160, rating: 4.7, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop", category: "icecream", isVeg: true },
];

export const categories = [
  { id: "all", label: "All", icon: "🍽️" },
  { id: "veg", label: "Veg", icon: "🥬" },
  { id: "nonveg", label: "Non Veg", icon: "🍗" },
  { id: "noodles", label: "Noodles", icon: "🍜" },
  { id: "pizza", label: "Pizza", icon: "🍕" },
  { id: "burger", label: "Burger", icon: "🍔" },
  { id: "drinks", label: "Drinks", icon: "🥤" },
  { id: "icecream", label: "Ice Cream", icon: "🍦" },
];
