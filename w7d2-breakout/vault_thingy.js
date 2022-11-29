const vaultSystem = (initialAmount) => {
  let amount = { current: initialAmount, previous: null };

  const addMoneyToVault = (money) => {
    amount.previous = amount.current;
    amount.current = amount.current + money;
  };

  return [amount, addMoneyToVault];
};

const [vault1, addMoneyToVault1] = vaultSystem(100);
const [vault2, addMoneyToVault2] = vaultSystem(1000);

console.log(vault1, vault2);

addMoneyToVault1(500);

console.log(vault1, vault2);
