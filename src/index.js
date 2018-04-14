var m = require("mithril")
var MyComponent = require("./components/mycomponent")

    
var Test = {
    view: function() {
        return <MyComponent />
    }
}

var Title = {
    view:function() {
        return m("title","Latihan Methril Ke 1")
    }
}

var About = {
    view:function(){
        return m("h2","ini ABout")
        // m("a", {href: "#!/"}, "Awal"),
        // m("a", {href: "#!/about"}, "About")
    }
}

var Home = {
    view:function() {
        return m("h1","Ini Home")
        // m("a", {href: "#!/"}, "Awal"),
        // m("a", {href: "#!/home"}, "Home")
    }
}


m.render(document.head, <Title/>)
var root = document.body
// m.render(document.body, <Test/>) 

m.route(root, "/", {
    "/": Test,
    "/about": About,
    "/home": Home,
})
