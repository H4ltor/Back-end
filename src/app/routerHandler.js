const cardRoutes = require("./Card/routes")
module.exports = app => {
    app.use("/card", cardRoutes);
}