var m = require("mithril")

var MyComponent = {
    view: function() {
        return m("div",[
            m("h1","Hallo Ugi, INI MITHRIL JSX 1"),
            m("a", {href: "#!/home"}, "Home "),
            m("a", {href: "#!/about"}, "About")
        ])
    }
}

module.exports = MyComponent;