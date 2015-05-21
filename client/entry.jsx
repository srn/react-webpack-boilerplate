'use strict';

import 'styles/main.scss';

import React from 'react/addons';
import IndexComponent from 'components/Index/IndexComponent.jsx';

React.render(<IndexComponent items={[1,2,3]} />, document.body);
