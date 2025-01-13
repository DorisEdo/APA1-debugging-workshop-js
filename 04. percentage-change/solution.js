function calculatePercentageChange(original, newAmount) {
  if(original === 0){
    return newAmount * 100;
  }
  const difference = Math.abs(newAmount - original);
  const percentageDifference = (difference/ original) * 100;
  return parseFloat(percentageDifference.toFixed(2));
}
console.log(calculatePercentageChange(100, 120));

module.exports = { calculatePercentageChange };
