export const formatDecimal = (number, decimalPlace = 2) => {
  const formattedNumber = Number(number).toFixed(decimalPlace) || number;
  return formattedNumber;
};
