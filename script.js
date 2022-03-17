function fetchData() {
    fetch('https://content.guardianapis.com/search?api-key=4755d17e-dce0-4b88-ba7c-bcc8f0e21ed9')
        .then(response => {
            if (!response.ok) {
                throw Error("ERROR you fool");
            }
            return response.json();
        }).then(data => {
           console.log(data.response.results); 
           const html = data.response.results.map(user => {
               return `<p> ${user.webTitle} </p>`
           }).join('');
           console.log(html);
            document
            .querySelector('#app')
            .insertAdjacentHTML("afterbegin", html);

        }).catch(error => {
            console.log(error)
        });
}

fetchData();