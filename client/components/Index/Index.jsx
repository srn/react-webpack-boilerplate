import React, { Component } from 'react';

class IndexComponent extends Component {
  render() {
    if (this.props.items.length === 0) {
      return (
        <p ref="empty">Index is empty.</p>
      );
    }

    return (
      <section>
        <h2>react-webpack-boilerplate</h2>
        <ul ref="indexList" className="index-list">
          {this.props.items.map((item, index) => {
            return (<li key={index}>item {item}</li>);
          })}
        </ul>
      </section>
    );
  }
}

IndexComponent.defaultProps = {
  items: []
};

export default IndexComponent;
