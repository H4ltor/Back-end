const mongoose = require("mongoose");
module.exports = app => {
    mongoose.connect('mongodb+srv://treeAdmin:toor@treedb.gpfaj.mongodb.net/tree?authSource=admin&replicaSet=atlas-lmhr39-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true/shop', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }).then(res => console.log("connected")).catch(err => console.log(err))
    mongoose.Promise = global.Promise;
    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);
    process.on("SIGHUP", cleanup);
    if (app) {
        app.set("mongoose", mongoose);
    }
    console.log('Connected to mongodb')
};
function cleanup() {
    mongoose.connection.close(function () {
        process.exit(0);
    });
}