jest.dontMock('./NotFoundComponent.jsx');

import React from 'react/addons';

var ReactTestUtils = React.addons.TestUtils;

var NotFound = require('./NotFoundComponent.jsx');

describe('NotFoundComponent', () => {

  it('should render', () => {
    var instance = ReactTestUtils.renderIntoDocument(<NotFound />);

    expect(instance).toBeDefined();
    expect(instance.refs.title).toBeDefined();
    expect(instance.refs.title.props.children).toEqual('404. Not found.');
  });

});
