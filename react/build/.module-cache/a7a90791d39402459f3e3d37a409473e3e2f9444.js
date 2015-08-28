/**
 * Created by liyatang on 15/8/1.
 */
var Test = React.createClass({displayName: "Test",
    render: function(){
        return React.createElement("div", null, "test");
    }
});

React.render(React.createElement(Test, null), document.getElementById('testContainer'));