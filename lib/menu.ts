export type MenuBadge = "gf" | "spicy" | "veg" | "featured";

export type MenuItem = {
  name: string;
  description: string;
  price: number;
  badges?: MenuBadge[];
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "antojitos",
    title: "Antojitos",
    subtitle: "Small plates",
    items: [
      {
        name: "Crispy Chicken Flautas",
        description: "Shredded chicken with Monterey Jack in a fried flour tortilla.",
        price: 20,
      },
      {
        name: "Birria Croquettes",
        description: "Crispy outside, soft inside — beef, cheese, and potatoes.",
        price: 20,
      },
      {
        name: "Atlantic Ceviche",
        description: "Fresh citrus shrimp and haddock, onion, jalapeño, avocado, cilantro.",
        price: 20,
        badges: ["gf", "spicy"],
      },
      {
        name: "Pork Belly Chicharrón",
        description: "Thick-cut crispy pork belly with green tomatillo salsa.",
        price: 20,
        badges: ["gf"],
      },
      {
        name: "Guac + Chips",
        description: "Fresh avocado, pico de gallo, lime, and crispy corn chips.",
        price: 12,
        badges: ["gf"],
      },
      {
        name: "Queso + Chips",
        description: "White cheddar jalapeño dip with fresh corn tortilla chips.",
        price: 12,
        badges: ["gf", "spicy"],
      },
      {
        name: "1lb Hot & Honey Wings",
        description: "Adobo honey butter wings with buttermilk ranch.",
        price: 20,
        badges: ["gf", "spicy"],
      },
      {
        name: "Chorizo Dumplings",
        description: "Chorizo, green onion, and ginger with guajillo chili vinegar.",
        price: 14,
      },
      {
        name: "Jalapeño Poppers",
        description: "Baked bacon, cheese, jalapeño, and chicken.",
        price: 18,
        badges: ["spicy"],
      },
    ],
  },
  {
    id: "tacos",
    title: "Tacos",
    subtitle: "Three tacos — nachos or quesadilla +$2",
    items: [
      {
        name: "Birria",
        description: "El Patrón's most popular taco with onions and cilantro.",
        price: 21,
        badges: ["gf"],
      },
      {
        name: "Pork Carnitas",
        description: "Pork confit with pickled red onions and salsa verde.",
        price: 18,
        badges: ["gf"],
      },
      {
        name: "Smoked Chile Veggie",
        description: "Beyond meat, ancho chilies, cabbage, chipotle aioli, ranch.",
        price: 20,
        badges: ["gf", "veg"],
      },
    ],
  },
  {
    id: "ensaladas",
    title: "Ensaladas",
    items: [
      {
        name: "Grilled Caesar Salad",
        description: "Charred romaine, garlic olive oil, chipotle caesar, double smoked bacon.",
        price: 18,
        badges: ["gf"],
      },
      {
        name: "Taco Salad",
        description: "Guacamole, pico, cheese, lettuce, chipotle dressing, corn chips.",
        price: 18,
        badges: ["gf", "veg"],
      },
    ],
  },
  {
    id: "principal",
    title: "Principal",
    subtitle: "Includes one side — add an extra side for $4",
    items: [
      {
        name: "1/2 Doz. Oysters",
        description: "With New Brunswick mignonette.",
        price: 23,
        badges: ["featured"],
      },
      {
        name: "El Burger",
        description: "Two smashed beef patties, guacamole, chipotle aioli, American cheese.",
        price: 25,
        badges: ["featured"],
      },
      {
        name: "Peruvian Half-Roasted Chicken",
        description: "Citrus flavors with ají verde sauce.",
        price: 36,
        badges: ["gf"],
      },
      {
        name: "Baked Miso Salmon",
        description: "Chipotle miso salmon with coconut calabacitas.",
        price: 34,
        badges: ["gf", "spicy"],
      },
      {
        name: "Street Corn Pasta",
        description: "Cream corn sauce, smoked chili crisp — available gluten-free.",
        price: 30,
        badges: ["veg"],
      },
      {
        name: "Double Thick Pork Chop",
        description: "Citrus achiote marinade with pickled red onions.",
        price: 32,
        badges: ["gf"],
      },
      {
        name: "Carne Asada",
        description: "Skirt steak in beer, citrus, cilantro, cumin, and garlic.",
        price: 40,
      },
      {
        name: "Beef Tips",
        description: "Braised beef, peppers, mushrooms on mashed potatoes.",
        price: 36,
      },
      {
        name: "14 oz Rib Eye Steak",
        description: "Sous vide with chimichurri.",
        price: 48,
        badges: ["gf"],
      },
      {
        name: "Braised Short Ribs",
        description: "Rich ribs with roasted maple butternut squash purée.",
        price: 42,
        badges: ["gf"],
      },
      {
        name: "Cubano",
        description: "Mojito pork, pork belly, Manchego, pickles, mustard aioli hoagie.",
        price: 23,
      },
      {
        name: "Carne Asada Poutine",
        description: "Fries, grilled steak, jalapeño queso, onions, cilantro.",
        price: 26,
      },
      {
        name: "Maki Mex Bowl",
        description: "Chili-crisp salmon, Mexican rice, vegetables, crema, whipped avocado.",
        price: 28,
        badges: ["gf"],
      },
    ],
  },
  {
    id: "sopa",
    title: "Sopa",
    items: [
      {
        name: "Lita's Tortilla Soup",
        description: "Abuelita's chicken soup with tortilla strips, avocado, crumbled cheese.",
        price: 16,
        badges: ["gf"],
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      {
        name: "Jarritos Soda",
        description: "Cola, mandarin, lime, guava, strawberry.",
        price: 3.5,
      },
      {
        name: "Juice",
        description: "Cranberry, pineapple, lychee, mango, orange.",
        price: 4,
      },
      {
        name: "Pop",
        description: "Classic fountain sodas.",
        price: 2.75,
      },
      {
        name: "Sparkling Water",
        description: "Chilled and bubbly.",
        price: 4,
      },
      {
        name: "Coffee / Tea",
        description: "Hot or iced.",
        price: 2.75,
      },
    ],
  },
];

export const menuLegend = [
  { badge: "gf" as const, label: "Gluten Free" },
  { badge: "spicy" as const, label: "Spicy" },
  { badge: "veg" as const, label: "Vegetarian" },
  { badge: "featured" as const, label: "House Special" },
];

export const sides = [
  "Honey + Jalapeño Cheddar Mash",
  "Mexican Rice",
  "Mexican Fries",
  "Fajita Peppers, Mushroom + Onion",
  "Broccolini + Queso",
];
