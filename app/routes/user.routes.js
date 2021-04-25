const controller = require("../controllers/user.controller")

module.exports = function (app) {
    app.post("/api/users/saveNewUser", controller.saveNewUser);
    app.get("/api/users/getAllUsers", controller.getAllUsers);
    app.put("/api/users/updateUser", controller.updateUser);
    app.delete("/api/users/deleteUser/:uid", controller.deleteUser);
}