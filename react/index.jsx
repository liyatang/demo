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

    var Box = React.createClass({
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
                <div>
                    <div>Current window width: {this.state.windowWidth}</div>
                    <select multiple="true" defaultValue={[1,2]}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            );
        }
    });

    React.render(<Box />, document.body);

    var testElement = <Box />;

})();