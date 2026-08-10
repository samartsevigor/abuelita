export const site = {
  name: "Abuelita's",
  tagline: "Latin Fusion & Cocktails",
  subtitle: "A Seat at the Table",
  location: "Uptown Saint John, New Brunswick",
  description:
    "Saint John’s newest Latin fusion restaurant. Tequila-forward cocktails, food with abuela’s soul, and a team that shows up every night.",
  reservationUrl:
    "https://www.tbdine.com/book/restaurant/abuelitas?idApp=72142&language=en-US&utm_source=ig&utm_medium=social&utm_content=link_in_bio",
  instagramUrl: "https://www.instagram.com/abuelitas_restaurant/",
  instagramHandle: "@abuelitas_restaurant",
  award: {
    badge: "Uptown Burger Week 2026",
    headline: ["Best Burger", "Uptown Saint John"],
    sponsor: "Grant Thornton",
    sponsorFull: "Doane Grant Thornton",
    title: "2026 Uptown Burger Week Winner",
    story:
      "The team from Grant Thornton honoured us with this trophy for the best burger during Uptown Burger Week in Uptown Saint John — accepted by Abuelita herself on behalf of our team.",
  },
  menu: {
    eyebrow: "La Carta",
    intro:
      "Chef José Adair’s menu — antojitos, tacos, principal plates, and everything in between. Gluten-free and vegetarian options marked.",
  },
  vibe: {
    eyebrow: "The Room",
    headline: ["Cocktails", "& Kitchen"],
    intro: "Latin fusion food, tequila-forward drinks, and an uptown room built for long nights.",
    highlights: [
      {
        title: "Tequila Forward",
        text: "Margaritas, palomas, and house cocktails — the bar is as much a draw as the kitchen.",
      },
      {
        title: "Latin Fusion",
        text: "Birria tacos, Peruvian chicken, miso salmon, street corn pasta — abuela’s roots, modern plates.",
      },
      {
        title: "Uptown Saint John",
        text: "A seat at the table in the heart of uptown — come for dinner, stay for one more round.",
      },
    ],
  },
  reserve: {
    script: "See you at the table",
    headline: ["Book", "A Table"],
    text: "Reserve online through TouchBistro Dine, or follow us on Instagram for specials and news from the kitchen.",
  },
  nav: [
    { label: "Menu", href: "#menu" },
    { label: "Award", href: "#award" },
    { label: "Vibe", href: "#vibe" },
    { label: "Reviews", href: "#reviews" },
    { label: "Reserve", href: "#reserve" },
  ],
} as const;
