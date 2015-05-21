jest.dontMock('./NotFoundComponent.jsx');

var React = require('react/addons');

var NotFound = require('./NotFoundComponent.jsx');
var ReactTestUtils = React.addons.TestUtils;

describe('NotFoundComponent', function() {

  it('should render', function() {
    var instance = ReactTestUtils.renderIntoDocument(<NotFound />);

    expect(instance).toBeDefined();
    expect(instance.refs.title).toBeDefined();
    expect(instance.refs.title.props.children).toEqual('404. Not found.');
  });

});
