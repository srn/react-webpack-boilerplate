var React = require('react');

var NotFoundComponent = React.createClass({

  render: function() {
    return (
      <section>
        <h2 ref="title">404. Not found.</h2>
        <p>
          <img src="http://i.imgur.com/ooWW6.gif" />
        </p>
        <p><a href="/">Go to index</a></p>
      </section>
    );
  }
});

module.exports = NotFoundComponent;
