const fetch = require("node-fetch");

// fetch("...api", {
//     method: "post",
//     headers: {
//         "Content-Type": "application/xml"
//     },
//     body: JSON.stringify({
//         search: "Coca Cola"
//     })
// })

fetch("https://randomuser.me/api?result=100&seed=abc")
    .then(response => {
        console.log(response.status, response.statusText);

        if (!response.ok) {
            throw new Error("Algo falló")
        }

        return response.json();
    }).then(data => {
        console.log(data.results[0].name);
    }).catch(error => {
        console.log(error)
    });