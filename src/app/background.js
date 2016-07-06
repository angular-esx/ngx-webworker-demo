var NG_CORE = require("angular2/core");
var WORKER_APP = require("angular2/platform/worker_app");
var DEMO = require("./demo");

NG_CORE.platform([WORKER_APP.WORKER_APP_PLATFORM])
.application([WORKER_APP.WORKER_APP_APPLICATION])
.bootstrap(DEMO);
