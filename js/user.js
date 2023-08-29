/**
 * Users information
 * @param {Object[]} data Users list 
 * @param {string} data[].name User name 
 * @param {number} data[].agre User age 
 * @returns 
 */

export function renderUserList(data) {

    const ulDOM = document.querySelector('ul');
    let HTML = '';
        for(const user of data) {
            HTML += `<li>
                        <div>Name: ${user.name}</div>
                        <div>Age: ${user.age}</div>
                    </li>`;
        }
        ulDOM.innerHTML = HTML;

}

renderUserList([{name:'jonas', age: 25}])