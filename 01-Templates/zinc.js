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

    //        //append created element to existing element
    //        displayCard.appendChild(displayCardChild);
    //    }
    // }
    // })();

    (() => {
    //part 2
    //render template function
    function renderTemplate(tempStr, data) {
        let userList = document.getElementById("z-user-list");

        console.log(data);


        let myRegEx = /{{\s*([A-Za-z0-9-]+)\s*}}/gm;

        let dataMap = data.map(user => {
            let userData = {
                photo: user.picture.thumbnail,
                firstName: user.name.first.charAt(0).toUpperCase() + user.name.first.slice(1),
                lastName: user.name.last.charAt(0).toUpperCase() + user.name.last.slice(1),
                city: user.location.city.charAt(0).toUpperCase() + user.location.city.slice(1),
                state: user.location.state.charAt(0).toUpperCase() + user.location.state.slice(1),
                email: user.email
            };
            return userData;

        })
        console.log(dataMap);

        dataMap.forEach(user => {
            let userString = tempStr.replace(myRegEx, (match, captured) => {

                return user[captured];
                
            })
            userList.insertAdjacentHTML('afterend', userString);
        })
    }



    function init() {
        fetch('https://randomuser.me/api/?results=5')
            .then(res => res.json())
            .then(json => {

                let tempStr = `<li class="user">
                        <img class="user-photo" src="{{ photo }}" alt="Photo of {{ firstName }} {{ lastName }}">
                        <div class="user-name">{{ firstName }} {{ lastName }}</div>
                        <div class="user-location">{{ city }}, {{ state }}</div>
                        <div class="user-email">{{ email }}</div>
                    </li>`;

                renderTemplate(tempStr, json.results);
            })
    }

    document.addEventListener('DOMContentLoaded', init);

     
})();

