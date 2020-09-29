(function() {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
           templateUrl: 'scr/menulist/templates/categories.component.html',
            bindings: {
                categories: '<'
            }
        });
})();
