var m = require("mithril")

var MyComponent = {
    ok:function(){
        m.request({
            method: "GET",
            url: "http://localhost:8004/api/galeri/select?limit=10&offset=0",
            // data: {count: count + 1},
            // withCredentials: true,
        })
        .then(function(data) {
            console.log(data)
        })
    },
    view: function() {
        return m("div",[
            m("h1","Hallo Ugi, INI MITHRIL JSX 1"),
            m("div",[
                m("a", {href: "#!/home"}, "Home "),
                m("a", {href: "#!/about"}, "About"),
            ]),
            m("br"),
            m("button", {onclick: this.ok}, "Click")
        ])
    }
}

module.exports = MyComponent;