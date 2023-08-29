const ulDOM = document.querySelector('ul');

const data = fetch('')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for(const user of data) {
            console.log(user);
        }
    })