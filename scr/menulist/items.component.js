(function() {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'scr/menulist/templates/items.component.html',
            bindings: {
                items: '<'
            }
        });
})();
