export const holdingsDataCalculator = data => {
  const totalCurrVal = data.reduce((accumulator, {quantity, ltp}) => {
    return accumulator + quantity * ltp;
  }, 0);
  const totalInvestment = data.reduce((accumulator, {quantity, avgPrice}) => {
    return accumulator + (avgPrice - quantity);
  }, 0);
  const todayPnL = data.reduce((accumulator, {quantity, avgPrice, ltp}) => {
    return (
      accumulator +
      Math.round(((ltp - avgPrice) * quantity + Number.EPSILON) * 100) / 100
    );
  }, 0);
  const totalPnL = totalCurrVal - totalInvestment;
  return {
    currentValue: Math.round((totalCurrVal + Number.EPSILON) * 100) / 100,
    totalInvestment: Math.round((totalInvestment + Number.EPSILON) * 100) / 100,
    todayPL: Math.round((todayPnL + Number.EPSILON) * 100) / 100,
    pl: Math.round((totalPnL + Number.EPSILON) * 100) / 100,
  };
};
