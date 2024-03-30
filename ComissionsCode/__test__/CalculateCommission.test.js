const calculateCommissionFunction = require('../CalculateCommission');

describe('calculateCommissionFunction: Commission Calculation Tests', () => 
{
  test('Rule 1: Lock Qty = 1, Stock Qty = 1, Barrel Qty = 1', () => {
    const [totalSales, commission] = calculateCommissionFunction(1, 1, 1);
    expect(totalSales).toBe(100);
    expect(commission).toBe(10);
  });

  test('Rule 2: Lock Qty = 1, Stock Qty = 1, Barrel Qty = 91', () => {
    const result = calculateCommissionFunction(1, 1, 91);
    expect(result).toBe("Sales quantities exceed maximum limits.");
  });

  test('Rule 3: Lock Qty = 1, Stock Qty = 81, Barrel Qty = 1', () => {
    const result = calculateCommissionFunction(1, 81, 1);
    expect(result).toBe("Sales quantities exceed maximum limits.");
  });

  test('Rule 4: Lock Qty = 1, Stock Qty = 81, Barrel Qty = 91', () => {
    const result = calculateCommissionFunction(1, 81, 91);
    expect(result).toBe("Sales quantities exceed maximum limits.");
  });

  test('Rule 5: Lock Qty = 71, Stock Qty = 1, Barrel Qty = 1', () => {
    const result = calculateCommissionFunction(71, 1, 1);
    expect(result).toBe("Sales quantities exceed maximum limits.");
  });

  test('Rule 6: Lock Qty = 71, Stock Qty = 1, Barrel Qty = 91', () => {
    const result = calculateCommissionFunction(71, 1, 91);
    expect(result).toBe("Sales quantities exceed maximum limits.");
  });

  test('Rule 7: Lock Qty = 71, Stock Qty = 81, Barrel Qty = 1', () => {
    const result = calculateCommissionFunction(71, 81, 1);
    expect(result).toBe("Sales quantities exceed maximum limits.");
  });

  test('Rule 8: Lock Qty = 71, Stock Qty = 81, Barrel Qty = 91', () => {
    const result = calculateCommissionFunction(71, 81, 91);
    expect(result).toBe("Sales quantities exceed maximum limits.");
  });
});
