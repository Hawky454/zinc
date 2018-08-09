'use strict';

/* eslint-env browser */

const Zinc = {components: {}};

(() => {
  function hilight() {
    this.classList.toggle('hilight');
  };

  function renderComponent(element, content, data, controller) {
    let regex = /{{\s*([\w.]+)\s*}}/g;
    let elements = Array.from(document.getElementsByTagName(element));

    fetch(`${content}.html`)
      .then(content => content.text())
      .then((content) => {
        elements.forEach(element => {

          console.log(element);
          
          let HTML = content.replace(regex, (match, capture) => {
            let arr = capture.split('.');

            return arr.reduce((acc, curr) => acc[curr], data)
          })
          element.addEventListener('click', controller);
          element.insertAdjacentHTML('beforeend', HTML);
        })
      })
    }

    function renderComponents(components) {
      for(let component in components) {
        renderComponent(
          components[component].name,
          components[component].templateFile,
          components[component].data,
          components[component].controller)
      }
    }

    Zinc.registerComponent = function(configObj) {
        //called in Zinc at begining does self check
        //if (!Zinc.components) {
        //  Zinc.components = {};
        //}
        Zinc.components[configObj.name] = {
          name: configObj.name,
          templateFile: configObj.templateFile,
          data: configObj.data,
          controller: configObj.controller
        };
    }


    function reviewStackLine(parentNode) {
      Array.from(parentNode.childNode).forEach((node) => {
        element = document.querySelector(Zinc.components);




      })
    }

    function init() {
      //*removes Jack Burton form the list
      //*Zinc.registerComponent('user-item', 'user', Zinc.userData, controller);
      //*renderComponents(Zinc.components);

      fetch('https://randomuser.me/api/?results=2')
      .then(res => res.json())
      .then(data => {
        data.results.forEach(user => {

          Zinc.registerComponent({
            name: 'user-list',
            templateFile: 'list',
            data: user,
            controller: hilight
          });
          //console.log(user);

        //   Zinc.registerComponent({
        //     name: 'user-info',
        //     templateFile: 'user',
        //     data: user,
        //     controller: hilight
        //   });
          console.log('user', user);

          renderComponents(Zinc.components);
        })
      })
    }
    document.addEventListener('DOMContentLoaded', init);

})();