export const currencyFormat = (value) => {
  const { currency, amount, decimals } = value;
  const totalPrice = amount + decimals;
  return new Intl.NumberFormat('es-AR', {
   style: 'currency',
   currency: currency,
   minimumFractionDigits: 2,
   maximumFractionDigits: 2,
 }).format(totalPrice);

}