jest.dontMock('./Index.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

var Index = require('./Index.jsx').default;

describe('IndexComponent', () => {

  it('should render', () => {
    var items = [1, 2];

    var componentInstance = TestUtils.renderIntoDocument(<Index items={items} />);
    var indexItems = TestUtils.scryRenderedDOMComponentsWithTag(componentInstance, 'li');

    expect(indexItems.length).toEqual(items.length);
  });

  it('should render empty list', () => {
    var componentInstance = TestUtils.renderIntoDocument(<Index />);

    expect(componentInstance.refs.empty.textContent).toEqual('Index is empty.');
  });

});
