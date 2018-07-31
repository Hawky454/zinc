'use strict';

/* eslint-env browser */

(() => {
    function populateList(results) {
     // eslint-disable-line no-console

       for(let i = 0; i < results.length; i++) {
           let data = results[i];
           console.log(data);
           let displayCardChild = document.createElement('li');
           displayCardChild.setAttribute('class', 'user');

           let displayCard = document.getElementById('z-user-list');
           //image
           let image = document.createElement('img');
           image.setAttribute('src', data.picture.thumbnail);
           image.setAttribute('class', 'user-photo');

           console.log(image);
           //user name
           let userName = document.createElement('div');
           userName.setAttribute('class', 'user-name');
           userName.innerText = `${data.name.first.charAt(0).toUpperCase() + data.name.first.slice(1)} ${data.name.last.charAt(0).toUpperCase() + data.name.last.slice(1)}`;

           console.log(userName);

           //email
           let userEmail = document.createElement('div');
           userEmail.setAttribute('class', 'user-email');
           userEmail.innerText = data.email;

           console.log(userEmail)

           //append data to created element
           displayCardChild.appendChild(image);
           displayCardChild.appendChild(userName);
           displayCardChild.appendChild(userEmail);

           //append created element to existing element
           displayCard.appendChild(displayCardChild);

        

       }
       return results;
    }

    function init() {
        fetch('https://randomuser.me/api/?results=5')
            .then(res => res.json())
            .then(json => populateList(json.results));
    }

    document.addEventListener('DOMContentLoaded', init);
       
})();
