const fetch = require("node-fetch");

async function obtnerUsuarios(results, seed) {
    const response = await fetch(`https://randomuser.me/api?results=${results}&seed=${seed}`);
    // const response = await fetch(`https://randomuser.me/apix?results=${results}&seed=${seed}`);

    try {
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log("Falló:", error);
    }

}

obtnerUsuarios(20, "abc")