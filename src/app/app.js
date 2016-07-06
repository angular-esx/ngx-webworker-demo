var NG_CORE = require("angular2/core");
var WORKER_RENDER = require("angular2/platform/worker_render");

NG_CORE.platform([WORKER_RENDER.WORKER_RENDER_PLATFORM])
.application([WORKER_RENDER.WORKER_RENDER_APP, new NG_CORE.Provider(WORKER_RENDER.WORKER_SCRIPT, {useValue: "loader.js"})]);
