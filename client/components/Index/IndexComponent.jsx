var React = require('react');

var IndexComponent = React.createClass({
  getDefaultProps: function () {
    return {
      items: []
    };
  },

  render: function() {
    if (this.props.items.length === 0) {
      return (
        <p ref="empty">Index is empty.</p>
      );
    }

    return (
      <section>
        <h2>react-webpack-boilerplate</h2>
        <ul ref="indexList" className="index-list">
          {this.props.items.map(function(item){
            return <li>item {item}</li>
          })}
        </ul>
      </section>
    );
  }
});

module.exports = IndexComponent;
