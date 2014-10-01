var React = require('react/addons');

var IndexComponent = require('./IndexComponent');
var ReactTestUtils;

describe('IndexComponent', function() {

  beforeEach(function() {
    ReactTestUtils = React.addons.TestUtils;
  });

  it('should render', function() {
    var items = [];

    for (var i = 0; i < 2; i++) {
      items.push(i);
    }

    var componentInstance = ReactTestUtils.renderIntoDocument(<IndexComponent items={items} />);
    var indexItems = ReactTestUtils.scryRenderedDOMComponentsWithTag(componentInstance, 'li');

    expect(componentInstance).toBeDefined();
    expect(componentInstance.refs.indexList).toBeDefined();
    expect(indexItems).toBeDefined();
    expect(indexItems.length).toEqual(items.length);
  });

  it('should render empty list', function() {
    var componentInstance = ReactTestUtils.renderIntoDocument(<IndexComponent />);

    expect(componentInstance).toBeDefined();
    expect(componentInstance.refs.empty).toBeDefined();
    expect(componentInstance.refs.empty.props.children).toEqual('Index is empty.');
  });

});