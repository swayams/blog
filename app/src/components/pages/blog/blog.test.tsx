import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Blog from './blog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Blog index=''/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
 