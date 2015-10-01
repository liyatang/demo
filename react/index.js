(function () {
    'use strict';

    var dispatcher = new Flux.Dispatcher();
    var countryStore = {country: null};
    var cityStore = {city: null};



    cityStore.dispathToken = dispatcher.register(function (payload) {
        if(payload.actionType === 'city-update'){
            cityStore.city = payload.data;
        }

        if(payload.actionType === 'country-update'){

            dispatcher.waitFor([countryStore.dispathToken]);

            cityStore.city =  getCityByCountry(countryStore.country);
        }
    });

    countryStore.dispathToken = dispatcher.register(function (payload) {
        if(payload.actionType === 'country-update'){
            countryStore.country = payload.data;
        }
    });

    function getCityByCountry(counrty){
        return 'city by country: ' + counrty;
    }

    dispatcher.dispatch({
        actionType: 'country-update',
        data: 'country-dispatch'
    });

    //dispatcher.dispatch({
    //    actionType: 'city-update',
    //    data: 'city-dispatch'
    //});
    console.log(cityStore);

    console.log(countryStore);


    //    var HelloClass = React.createClass({
    //        render: function () {
    //
    //            var word = 'Hello ' + this.props.name + '. Now time is ' + this.props.date;
    //            return React.DOM.p(null, word);
    //        }
    //    });
    //
    //    var HelloFactory = React.createFactory(HelloClass);
    //
    //    React.render(HelloFactory({
    //        name: 'liyatang', date: new Date()
    //    }), document.getElementById('helloContainer'));

    var Box = React.createClass({displayName: "Box",
        getInitialState: function () {
            return {windowWidth: window.innerWidth};
        },

        handleResize: function (e) {
            this.setState({windowWidth: window.innerWidth});
        },

        componentDidMount: function () {
            window.addEventListener('resize', this.handleResize);
        },

        componentWillUnmount: function () {
            window.removeEventListener('resize', this.handleResize);
        },

        render: function () {
            return (
                React.createElement("div", null, 
                    React.createElement("div", null, "Current window width: ", this.state.windowWidth), 
                    React.createElement("select", {multiple: "true", defaultValue: [1,2]}, 
                        React.createElement("option", {value: "1"}, "1"), 
                        React.createElement("option", {value: "2"}, "2"), 
                        React.createElement("option", {value: "3"}, "3"), 
                        React.createElement("option", {value: "4"}, "4")
                    )
                )
            );
        }
    });

    React.render(React.createElement(Box, null), document.body);

    var testElement = React.createElement(Box, null);

})();