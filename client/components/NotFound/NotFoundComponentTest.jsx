var React = require('react/addons');

var NotFound = require('./NotFoundComponent');
var ReactTestUtils;

describe('NotFoundComponent', function() {

  beforeEach(function() {
    ReactTestUtils = React.addons.TestUtils;
  });

  it('should render', function() {
    var instance = ReactTestUtils.renderIntoDocument(<NotFound />);

    expect(instance).toBeDefined();
    expect(instance.refs.title).toBeDefined();
    expect(instance.refs.title.props.children).toEqual('404. Not found.');
  });

});
