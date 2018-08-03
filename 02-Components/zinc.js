'use strict';

/* eslint-env browser */

const Zinc = {};



(() => {

    Zinc.registerComponent = function (elementName, templateFile, dataObject) {
        if (!Zinc.components) {
            Zinc.components = {};

        }
        Zinc.components[elementName] = {
            elementName,
            templateFile,
            dataObject
        };
    }

    function renderComponent1(element, content, data) {
        let elements = Array.from(document.getElementsByTagName(element));


        console.log(elements);
        fetch(`${content}.html`)
            .then(content => content.text())
            .then((content) => {

                elements.forEach(element => {
                    let regEx = /{{\s*([\w.]+)\s*}}/g;
                    let HTML = content.replace(regEx, (match, templateValue) => {
                        let templateValueArr = templateValue.split('.');
                        return templateValueArr.reduce((acc, curr) => acc[curr], data)
                    })
                    element.insertAdjacentHTML('beforeend', HTML);
                })
            })
    }

    // passing components = Zinc.components
    function renderComponents(components) {

        // looping through the keys and values of components object
        for (let component in components) {

            //passing content in object to function to render components (put content in html) 
            renderComponent1(components[component].elementName, components[component].templateFile, components[component].dataObject);
        }
    }

    function init() {
        Zinc.registerComponent('user-item', 'user', Zinc.userData);
        renderComponents(Zinc.components);
    }

    document.addEventListener('DOMContentLoaded', init);
})();