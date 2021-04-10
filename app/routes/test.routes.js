const controller = require("../controllers/test.controller")

module.exports = function (app) {
    app.post("/testpost", controller.testpost);
    app.delete("/testdelete", controller.testdelete);
    app.put("/testput", controller.testput);
    app.post("/databody", controller.databody);
    app.post("/dataparams/:name/:city", controller.dataparams);
    app.post("/dataquery", controller.dataquery);
}