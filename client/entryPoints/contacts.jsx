var React = require('react');

var ContactsComponent = React.createClass({
  render: function() {
    return (
      <p>Hello, Contacts Entry from React!</p>
    );
  }
});

React.renderComponent(<ContactsComponent />, document.body);
