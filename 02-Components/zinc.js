'use strict';

/* eslint-env browser */

const userData = {
    picture: {
        thumbnail: 'https://f4.bcbits.com/img/0001142378_10.jpg'
    },
    name: {
        first: 'Jack',
        last: 'Burton'
    },
    location: {
        city: 'San Francisco',
        state: 'CA'
    },
    email: 'jack.burton@example.com'
};

const Zinc = {};
Zinc.registerComponent = function (elementName, templateFile, dataObject) {
    Zinc.components.elementName = {
        elementName,
        templateFile,
        dataObject
    }
    console.log(Zinc.elementName);
}
Zinc.registerComponent('userItem', 'user', userData);

Zinc.renderComponents = function (all, componentsArr) {
    if(all === true) {
        for(let)
    }
}



(() => {
    function renderComponent(element, content, data) {
        let userItem = document.querySelector(element);
        fetch(`${content}.html`)
            .then(content => content.text())
            .then((content) => {
                let regEx = /{{\s*([\w.]+)\s*}}/g;
                let HTML = content.replace(regEx, (match, templateValue) => {
                    console.log(templateValue);
                    let templateValueArr = templateValue.split('.');
                    return templateValueArr.reduce((acc, curr) => acc[curr], data)
                })
                userItem.insertAdjacentHTML('beforeend', HTML);
            })
        // console.log(element, content); // eslint-disable-line no-console
    }

    function init() {
        renderComponent('user-item', 'user', userData);
    }

    document.addEventListener('DOMContentLoaded', init);
})();