export type Review = {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  photos?: string[];
};

export const reviews: Review[] = [
  {
    id: "felicia",
    name: "Felicia McAloon",
    avatar: "/images/reviews/felicia.jpg",
    rating: 5,
    date: "1 year ago",
    text: "Great addition to Uptown Saint John! We tried Abuelita's tonight for the first time with a group of 4 and it did not disappoint. Our table had a number of items from the menu and everything was exceptional. Top picks: Chicken Flautas, Birria Croquettes, Guac + Chips, Braised Short Ribs, Carne Asada, Birria Tacos, Broccolini, and the Mexican fries. Would also highly recommend the Brazilian Limeade for anyone looking for a mocktail.",
    photos: ["/images/reviews/felicia2.jpg", "/images/reviews/felicia3.png"],
  },
  {
    id: "denise",
    name: "Denise Raymond-Pringle",
    avatar: "/images/reviews/denis.jpg",
    rating: 5,
    date: "11 months ago",
    text: "We enjoyed our first visit to this new Mexican restaurant. The owner, José, greeted us and made sure we had a great experience. The guacamole and chips were fresh and flavorful. The pork carnitas tacos and birria tacos were delicious. The non-alcoholic margaritas were refreshing. We will definitely be back!",
    photos: ["/images/reviews/denis2.jpg"],
  },
  {
    id: "jennifer",
    name: "Jennifer IrvinWard",
    avatar: "/images/reviews/jenifer-1.jpg",
    rating: 5,
    date: "1 year ago",
    text: "We had an amazing meal with friends. Guacamole & Chips, Birria Croquettes for appetizers. Baked Miso Salmon, Braised Steak, Street Corn Pasta, and Braised Short Ribs. Spicy Margarita and the sangria was the best ever! Definitely going back to try more dishes.",
    photos: [
      "/images/reviews/jenifer-2.jpg",
      "/images/reviews/jenifer-3.jpg",
      "/images/reviews/jenifer-4.jpg",
    ],
  },
  {
    id: "tg",
    name: "T G",
    avatar: "/images/reviews/tg1.jpg",
    rating: 5,
    date: "1 year ago",
    text: "Great attention — we walked in and didn't feel left behind. Thomas was our bartender and server. Great service comes with a great smile. The environment is clean, warm, welcoming, and well-maintained. Food is nicely plated and delicious! Highly recommended for date nights, family dinners, friends get-togethers, even company events.",
    photos: ["/images/reviews/tg2.jpg", "/images/reviews/tg3.png"],
  },
];

export const reviewsSection = {
  eyebrow: "Guest Voices",
  headline: ["What People", "Are Saying"],
  intro: "Real reviews from guests who've pulled up a chair in Uptown Saint John.",
} as const;
