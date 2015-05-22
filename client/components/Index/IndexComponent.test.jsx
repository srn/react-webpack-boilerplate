jest.dontMock('./IndexComponent');

import React from 'react/addons';

var ReactTestUtils = React.addons.TestUtils;

var IndexComponent = require('./IndexComponent.jsx');

describe('IndexComponent', () => {

  it('should render', () => {
    var items = [];

    for (var i = 0; i < 2; i++) {
      items.push(i);
    }

    var componentInstance = ReactTestUtils.renderIntoDocument(<IndexComponent items={items} />);

    var indexItems = ReactTestUtils.scryRenderedDOMComponentsWithTag(componentInstance, 'li');

    expect(componentInstance).toBeDefined();
    expect(componentInstance.refs['indexList']).toBeDefined();
    expect(indexItems).toBeDefined();
    expect(indexItems.length).toEqual(items.length);
  });

  it('should render empty list', () => {
    var componentInstance = ReactTestUtils.renderIntoDocument(<IndexComponent />);

    expect(componentInstance).toBeDefined();
    expect(componentInstance.refs.empty).toBeDefined();
    expect(componentInstance.refs.empty.props.children).toEqual('Index is empty.');
  });

});
