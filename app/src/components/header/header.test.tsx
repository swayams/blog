import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});
