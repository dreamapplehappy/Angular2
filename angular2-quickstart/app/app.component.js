
(function(app) {
    "use strict";
    app.AppComponent =
        ng.core
            .Component({
                selector: 'my-app',
                template: '<h1>My First Angular2 App - Dreamapple</h1>'
            })
            .Class({
                constructor: function() {}
            })
})(window.app || (window.app = {}));