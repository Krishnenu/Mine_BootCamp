function calculateTotalCost(discountRate) {
    return function(shippingCost) {
      return function(items) {
        const subtotal = items.reduce((acc, item) => acc + item.price, 0);
        const discountAmount = subtotal * (discountRate / 100);
        const totalCost = subtotal - discountAmount + shippingCost;
        return totalCost;
      };
    };
  }
  
  // Define different discount tiers
  const tenPercentDiscount = calculateTotalCost(10);
  const twentyPercentDiscount = calculateTotalCost(20);
  const thirtyPercentDiscount = calculateTotalCost(30);
  
  // Define the shipping cost
  const standardShipping = 5;
  const expressShipping = 10;
  
  // Define the items in the order
  const itemsInOrder = [
    { name: 'Item 1', price: 20 },
    { name: 'Item 2', price: 30 },
    { name: 'Item 3', price: 15 },
  ];
  
  // Calculate total cost with different discount tiers and shipping options
  const totalCostWith10PercentDiscount = tenPercentDiscount(standardShipping)(itemsInOrder);
  const totalCostWith20PercentDiscount = twentyPercentDiscount(expressShipping)(itemsInOrder);
  const totalCostWith30PercentDiscount = thirtyPercentDiscount(standardShipping)(itemsInOrder);
  
  console.log("Total cost with 10% discount and standard shipping:", totalCostWith10PercentDiscount);
  console.log("Total cost with 20% discount and express shipping:", totalCostWith20PercentDiscount);
  console.log("Total cost with 30% discount and standard shipping:", totalCostWith30PercentDiscount);