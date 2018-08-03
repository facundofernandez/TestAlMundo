import angular from 'angular';

export default angular.module('OnErrorSrc', [])
    .directive('onErrorSrc', function () {
        return {
            link: function (scope, element, attrs) {
                element.bind('error', function () {
                    if (attrs.src != attrs.onErrorSrc) {
                        attrs.$set('src', attrs.onErrorSrc);
                    }
                });
            }
        }
    });