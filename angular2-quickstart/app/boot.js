
(function(app) {
    "use strict";
    document.addEventListener('DOMContentLoaded', function() {
        ng.platform.browser.bootstrap(app.AppComponent);
    });
})(window.app || (window.app = {}));