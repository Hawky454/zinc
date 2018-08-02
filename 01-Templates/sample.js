'use strict';

//this is just a sample of how I could have done part 1.
function populateList(results) {
    let userLIst = document.getElementById('z-user-list');
    for(let i = 0; i < results.length; i++) {



userList.insertAdjacentHTML('beforeend', `<li class="user">
<img class="user-photo" src=${results[i].picture.medium} alt="Photo of Jack Burton">
<div class="user-name">${results[i].name.first} ${results[i].name.last}</div>
<div class="user-location">${result[i].location.city}, ${results[i].location.state}</div>
<div class="user-email">${results[i].email}</div>
</li>`);

userList.append(user);
    }

}
