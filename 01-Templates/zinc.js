'use strict';

/* eslint-env browser */

// (() => {
// function populateList(results) {
//  // eslint-disable-line no-console
//    for(let i = 0; i < results.length; i++) {
//        let data = results[i];
//        console.log(data);
//        let displayCardChild = document.createElement('li');
//        displayCardChild.setAttribute('class', 'user');

//        let displayCard = document.getElementById('z-user-list');
//        //image
//        let image = document.createElement('img');
//        image.setAttribute('src', data.picture.thumbnail);
//        image.setAttribute('class', 'user-photo');

//        console.log(image);
//        //user name
//        let userName = document.createElement('div');
//        userName.setAttribute('class', 'user-name');
//        userName.innerText = `${data.name.first.charAt(0).toUpperCase() + data.name.first.slice(1)} ${data.name.last.charAt(0).toUpperCase() + data.name.last.slice(1)}`;

//        console.log(userName);

//        let userLocation = document.createElement('div');
//        userLocation.setAttribute('class', 'user-location');
//        userLocation.innerText = `${data.location.city.charAt(0).toUpperCase() + data.location.city.slice(1)} ${data.location.state.charAt(0).toUpperCase() + data.location.state.slice(1)}`;

//        console.log(data.location.city);

//        //email
//        let userEmail = document.createElement('div');
//        userEmail.setAttribute('class', 'user-email');
//        userEmail.innerText = data.email;

//        console.log(userEmail)

//        //append data to created element
//        displayCardChild.appendChild(image);
//        displayCardChild.appendChild(userLocation);
//        displayCardChild.appendChild(userName);
//        displayCardChild.appendChild(userEmail);

//could use append(image, userLocation, userName, userEmail).

//making a function:


//        //append created element to existing element
//        displayCard.appendChild(displayCardChild);
//    }
// }
// })();




// (() => {
//     //part 2
//     //render template function
//     function renderTemplate(tempStr, data) {
//         let userList = document.getElementById("z-user-list");

//         console.log(data);


//         let myRegEx = /{{\s*(\w+)\s*}}/gm;

//         let dataMap = data.map(user => ({
//                 photo: user.picture.thumbnail,
//                 firstName: user.name.first.charAt(0).toUpperCase() +           user.name.first.slice(1),
//                 lastName: user.name.last.charAt(0).toUpperCase() + user.name.last.slice(1),
//                 city: user.location.city.charAt(0).toUpperCase() + user.location.city.slice(1),
//                 state: user.location.state.charAt(0).toUpperCase() + user.location.state.slice(1),
//                 email: user.email
//         }));
//         console.log(dataMap);

//         dataMap.forEach(user => {
//             let userString = tempStr.replace(myRegEx, (match, replaced) => {

//                 return user[replaced];

//             })
//             userList.insertAdjacentHTML('beforeend', userString);
//         })
//     }



//     function init() {
//         fetch('https://randomuser.me/api/?results=5')
//             .then(res => res.json())
//             .then(json => {

// let tempStr = `<li class="user">
//         <img class="user-photo" src="{{ photo }}" alt="Photo of {{ firstName }} {{ lastName }}">
//         <div class="user-name">{{ firstName }} {{ lastName }}</div>
//         <div class="user-location">{{ city }}, {{ state }}</div>
//         <div class="user-email">{{ email }}</div>
//     </li>`;

//                 renderTemplate(tempStr, json.results);
//             })
//     }

//     document.addEventListener('DOMContentLoaded', init);


// })();


//part 3.

// (() => {

//     function renderTemplate(template, users) {
//         let bracketStuff = /\{\{\s+([\w.]+)\s+\}\}/gm;
        
//         users.forEach((user) => {
//             renderTemplate = template.replace(bracketStuff, (match, matches) => {
//                 let arr = matches.split('.');
//                 return arr.reduce((acc, curr) => acc[curr], user);
//             });
//             document.getElementById('z-user-list').insertAdjacentHTML('beforeend', renderTemplate);
//         });
//     }

//     const userLiTemplate = `
//     <li class="user">
//         <img class="user-photo" src="{{ picture.thumbnail }}" alt="Photo of {{ name.first }} {{ name.last }}">
//         <div class="user-name">{{ name.first }} {{ name.last }}</div>
//         <div class="user-location">{{ location.city }}, {{ location.state }}</div>
//         <div class="user-email">{{ email }}</div>
//     </li>
//     `;

//     function init() {
//         fetch('https://randomuser.me/api/?results=5')
//             .then(res => res.json())
//              .then(data => renderTemplate(userLiTemplate, data.results));
//     }

//     document.addEventListener('DOMContentLoaded', init);
// })();



'use strict';

/* eslint-env browser */

//part 4
(() => {

    function renderTemplate(template, users) {
        fetch(`${template}.html`)
            .then(template => template.text())
            .then((template) => {
                let bracketStuff = /{{\s*([\w.]+)\s*}}/g;
                users.forEach((user) => {
                    let renderTemplate = template.replace(bracketStuff, (match, matches) => {
                        let arr = matches.split('.');
                        return arr.reduce((acc, curr) => acc[curr], user);
                    });
                    document.getElementById('z-user-list').insertAdjacentHTML('beforeend', renderTemplate);
                });
            });
    };

    function init() {
        fetch('https://randomuser.me/api/?results=5')
            .then(res => res.json())
            .then(data => renderTemplate('user', data.results));
    }

    document.addEventListener('DOMContentLoaded', init);
})();




        
         

