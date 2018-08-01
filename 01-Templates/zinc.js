'use strict';

/* eslint-env browser */
(() => {
    //part 2
    //render template function
    function renderTemplate(tempStr, data) {
        let userList = document.getElementById("z-user-list");

        console.log(data);


        let myRegEx = /{{\s*(\w+)\s*}}/gm;

        let dataMap = data.map(user => ({
                photo: user.picture.thumbnail,
                firstName: user.name.first.charAt(0).toUpperCase() +           user.name.first.slice(1),
                lastName: user.name.last.charAt(0).toUpperCase() + user.name.last.slice(1),
                city: user.location.city.charAt(0).toUpperCase() + user.location.city.slice(1),
                state: user.location.state.charAt(0).toUpperCase() + user.location.state.slice(1),
                email: user.email
        }));
        console.log(dataMap);

        dataMap.forEach(user => {
            let userString = tempStr.replace(myRegEx, (match, replaced) => {

                return user[replaced];

            })
            userList.insertAdjacentHTML('beforeend', userString);
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


