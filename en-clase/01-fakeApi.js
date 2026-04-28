const API = "https://fakeapi.net/products";

async function getProducts() {
    try{
        const response = await fetch (API);
    const data = await response.json ();

    console.log (data);
    } catch (error){
        console.error("error al conectarse al fakeApi");
    }
}
    
getProducts();
    


