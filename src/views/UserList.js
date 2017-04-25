// src/views/UserList.js
var m = require("mithril")
var User = require("../models/User")

module.exports = {
    oninit: User.loadList,
    view: function(){
        //TODO
        return m(".user-list", User.list.map(function(user){
            return m("a.user-list-item", {href: "/edit/" + user.id, oncreate: m.route.link}, user.firstName + " " + user.lastName)
        }))
    }
}