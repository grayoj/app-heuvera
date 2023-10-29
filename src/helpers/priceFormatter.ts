export function formatPrice(price: number): string {
 if (isNaN(price) || typeof price !== 'number') {
  return 'Invalid Price';
 }

 const formattedPrice = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
 return `₦${formattedPrice}`;
}
