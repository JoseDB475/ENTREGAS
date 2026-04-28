const API = "https://fakeapi.net/products";

    const response = await fetch (API);
    const data = await response.json ();

    console.log(data);