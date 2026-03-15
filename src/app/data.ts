export const CAFE_DATA = {
  name: "Campus Cafe",
  table: "05",
};

export const MENU_ITEMS = [
  {
    id: "1",
    name: "Veg Burger",
    price: 60,
    description: "Crispy veggie patty with fresh lettuce, tomatoes, and our special sauce.",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjB2ZWclMjBidXJnZXJ8ZW58MXx8fHwxNzczMzA4NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Burger",
    isVeg: true,
    popular: true
  },
  {
    id: "2",
    name: "Pepperoni Pizza",
    price: 120,
    description: "Classic pizza with rich tomato sauce, mozzarella cheese, and fresh pepperoni.",
    image: "https://images.unsplash.com/photo-1764705309243-c47cbc9792e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBlcHBlcm9uaSUyMHBpenphfGVufDF8fHx8MTc3MzIzMzg1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Pizza",
    isVeg: false,
    popular: true
  },
  {
    id: "3",
    name: "Grilled Sandwich",
    price: 50,
    description: "Toasted sandwich loaded with veggies, cheese, and green chutney.",
    image: "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc2FuZHdpY2h8ZW58MXx8fHwxNzczMjkwMzg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Snacks",
    isVeg: true,
    popular: true
  },
  {
    id: "4",
    name: "Cold Coffee",
    price: 80,
    description: "Refreshing cold brewed coffee with milk, chocolate syrup, and ice.",
    image: "https://images.unsplash.com/photo-1595520519726-ad903736543c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29sZCUyMGNvZmZlZSUyMGdsYXNzfGVufDF8fHx8MTc3MzMwODYzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Drinks",
    isVeg: true,
    popular: true
  },
];

export const CATEGORIES = [
  { id: "burger", name: "Burger", icon: "🍔" },
  { id: "pizza", name: "Pizza", icon: "🍕" },
  { id: "snacks", name: "Snacks", icon: "🍟" },
  { id: "drinks", name: "Drinks", icon: "🥤" },
  { id: "meals", name: "Meals", icon: "🍱" },
  { id: "dessert", name: "Dessert", icon: "🍰" },
];
