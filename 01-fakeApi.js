// const API = "https://fakeapi.net/products";

// async function getProducts() {
//     try{
//         const response = await fetch (API);
//     const data = await response.json ();

//     console.log (data);
//     } catch (error){
//         console.error("error al conectarse al fakeApi");
//     }
// }
    
// getProducts();
    




// Fetch API: API JavaScript para realizar peticiones HTTP
const API = "https://fakeapi.net/products";

const calculateTotal = ( products ) => {

    let total = 1;

    for( let i = 0; i < products.length; i++ ) {
        total = products[i].price * products[i].stock;
    }

    return total;
} 

// const calculateTotal = ( products ) => {
//     let total = 0;

//     for( let i = 0; i < products.length; i++ ) {
//         total = total + products[i].price;
//     }

//     return total;
// } 

// Async / Await:
async function getProducts() {
    try {
        const response = await fetch( API );        // GET: Obtener los datos del Objeto Response (Respuesta)
        const data = await response.json();      // Obtener los datos y formaterarlos como unobjeto JSON
    
        // Implementacion
        const total = calculateTotal( data.data );

        console.log( `El valor total de ${ total }` ); 
    } catch (error) {
        console.error( "Error al conectarse al FakeAPI" );
    }

}

getProducts();