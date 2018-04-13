var m = require("mithril")

var MyComponent = {
        view: function() {
            return m("div",[
                m("h1","Hallo Ugi, INI MITHRIL JSX"),
            ])
        }
    }
        
m.render(document.body, <MyComponent />)