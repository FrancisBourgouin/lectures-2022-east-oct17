const quantities = { 1: 1, 3: 2, 4: 0 };

const pendingItems = [
  {
    id: 1,
    name: ",,,",
    ingredients: "...",
    price: "",
  },
];

const pendingItemsWithQuantity = pendingItems.map((item) => ({
  ...item,
  quantity: quantities[item.id],
}));

console.log(pendingItemsWithQuantity);
