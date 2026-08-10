const u = (id: string, w = 1920) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const localImages = {
  interior: "/images/interiour.jpg",
  burgerAward: "/images/burger-award.jpg",
  diningRoom: "/images/abuelita.jpg",
  cocktails: "/images/coctails.jpg",
} as const;

export const images = {
  hero: {
    background: localImages.cocktails,
  },
  sections: {
    award: localImages.diningRoom,
    menu: u("photo-1551504733-89365d581c96", 1920),
    vibe: u("photo-1559329007-40df8a934579", 1920),
    reserve: localImages.interior,
  },
  meals: [
    { src: "/images/coctails/coctailll3.png", alt: "Cocktails at Abuelita's" },
    { src: "/images/meals/meal-1.jpg", alt: "Latin fusion plate" },
    { src: "/images/coctails/cocktails-2.jpg", alt: "Margaritas at the bar" },
    { src: "/images/meals/meal-2.jpg", alt: "House specialty" },
    { src: "/images/coctails/coctaill2.png", alt: "Craft cocktails" },
    { src: "/images/meals/meal-3.jpg", alt: "From the kitchen" },
    { src: "/images/coctails/coctaail.png", alt: "Tequila-forward drinks" },
    { src: "/images/meals/meal-4.jpg", alt: "Latin fusion dish" },
    { src: "/images/coctails/coctails.jpg", alt: "Cocktail lineup" },
    { src: "/images/meals/meal-5.jpg", alt: "Chef's plate" },
    { src: "/images/meals/cocktails-3.jpg", alt: "Bar selection" },
    { src: "/images/meals/meal-6-burger.jpg", alt: "El Burger" },
    { src: "/images/meals/MEAL7-BURGER.jpg", alt: "Award-winning burger" },
  ],
} as const;
