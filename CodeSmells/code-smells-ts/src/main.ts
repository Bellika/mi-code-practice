// Ni kan använda console loggar för att få svar i terminalen
// När ni börjar på en uppgift är det bara att markera koden och ta bort kommentaren
// ctrl/cmd + / 

// 1. Skapa sorteringsfunktionen

const message: string = "Hello, TypeScript!";
console.log(message);

// const products = [
//   { name: "Product A", price: 30 },
//   { name: "Product B", price: 20 },
//   { name: "Product C", price: 40 }
// ];

// sortByPrice(products, "ascending")

// 2. Optimera listkopiering

// function copyProductList(products: Product[]): Product[] {
//   // Skriv om denna funktion så att den använder slice eller spread operatorn istället för en loop.
// }

// 3. Minska DOM-manipulationen

// function renderProducts(products: Product[]): void {
//   // Skapa HTML-strukturen för produkterna som en sträng och lägg till den i DOM efter loopen.
// }

// 4. Använd reduce() för att beräkna totalpris

// const cartItems = [
//   { name: "Item 1", price: 10, amount: 2 },
//   { name: "Item 2", price: 20, amount: 1 },
// ];

// function calculateTotal(cartItems: CartProduct[]): number {
//   // Beräkna totalbeloppet genom att använda reduce() här.
// }

// 5. Skapa en flexibel sorteringsfunktion

// const products = [
//   { name: "Product A", price: 30 },
//   { name: "Product B", price: 20 },
//   { name: "Product C", price: 40 }
// ];

// sortBy(products, "price", "asc");

// 6. Förenkla eventlyssnare med delegation

// document.querySelector(".product-list").addEventListener("mouseover", function(event) {
//   // Förenkla koden så att du inte behöver flera event-lyssnare för varje produkt.
// });

// 7. Använd template literals för att skapa HTML

// function createProductHtml(products: Product[]): void {
//   let html = "";
//   products.forEach(product => {
//     // Bygg upp HTML-strukturen med template literals här.
//   });

//   document.getElementById("product-list").innerHTML = html;
// }

// 8. Förbättra lagring av produktlistor

// function saveProductListToLocalStorage(products: Product[]): void {
//   // Kontrollera om produktlistan finns i localStorage och uppdatera den om den finns.
// }

// 9. Bygg en dynamisk produktfilterfunktion

// function filterProductsByCategory(category: string, products: Product[]): Product[] {
//   // Filtrera produkterna baserat på kategorin här.
// }

// 10. Förbättra produktdetaljhantering

// function showProductDetails(productId: number): void {
//   // Hämta produktinformationen från localStorage och visa den på sidan.
// }