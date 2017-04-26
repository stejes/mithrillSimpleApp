// src/models/User.js
var m = require("mithril")

var User = {
    list: [],
    loadList: function () {
        //TODO: make XHR call
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true,
        })
                .then(function (result) {
                    User.list = result.data
                })
    },
    current: {},
    load: function (id) {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users/:id",
            data: {id: id},
            withCredentials: true,
        })
                .then(function (result) {
                    User.current = result
                })
    },
    save: function () {
        return m.request({
            method: "PUT",
            url: "https://rem-rest-api.herokuapp.com/api/users/:id",
            data: User.current,
            withCredentials: true,
        })
    },
    delete: function (id) {
        return m.request({
            method: "DELETE",
            url: "https://rem-rest-api.herokuapp.com/api/users/:id",
            data: {id: id},
            withCredentials: true
        })
                .then(this.loadList)

    }
}

module.exports = User