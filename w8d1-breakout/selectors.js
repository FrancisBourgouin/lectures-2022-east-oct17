// Pantry & Orders

const pantry = [
  { name: "Chocolate", icon: "🍫", description: "Stale chocolate" },
  { name: "Cookie", icon: "🍪", description: "Very soft cookie" },
  { name: "Tuna", icon: "🎣", description: "It's in a can" },
  { name: "Pasta", icon: "🍝", description: "Ready to reheat!" },
  { name: "Potato", icon: "🥔", description: "Best potato" },
];

const newPantry = [
  { name: "Chocolate", icon: "🍫", description: "Homemade superfresh" },
  { name: "Cookie", icon: "🍪", description: "Very soft cookie" },
  { name: "Tuna", icon: "🎣", description: "It's fresh!" },
  { name: "Pasta", icon: "🍝", description: "Ready to boil!" },
  { name: "Potato", icon: "🥔", description: "Best potato" },
];

const benRaid = [{ name: "Potato", icon: "🥔", description: "Best potato" }]; // Potato

const bendRaid2 = ["🥔"];

const cheeverRaid = ["🎣", "🍫"]; // Tuna, Chocolate

const report = (pantry, raid) => {
  for (const icon of raid) {
    const ingredient = pantry.find((ing) => ing.icon === icon);
    console.log(`Nabbed some ${ingredient.name}, ${ingredient.description}`);
  }
};

report(pantry, cheeverRaid);
