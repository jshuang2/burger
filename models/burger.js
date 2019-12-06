var orm = require("../config/orm.js");

//Creating an object wrapper that has burger specific functions based on the ORM
var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },
    

}