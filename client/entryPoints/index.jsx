require('./common-styles');

var React = require('react');

var IndexComponent = require('../components/Index/IndexComponent');
var NotFoundComponent = require('../components/NotFound/NotFoundComponent');

var Router = require('react-mini-router');

var MainComponent = React.createClass({
  mixins : [Router.RouterMixin],

  routes : {
    '/': 'onIndex',
    '/404': 'notFound'
  },

  onIndex: function(){
    var items = [];

    for (var i = 0; i < 2; i++) {
      items.push(i);
    }

    return <IndexComponent items={items} />;
  },

  notFound: function () {
    return <NotFoundComponent />;
  },

  render: function() {
    return (
      <div className="main-app-entry">{this.renderCurrentRoute()}</div>
    );
  }
});

React.renderComponent(<MainComponent history={true} />, document.body);

module.exports = MainComponent;
