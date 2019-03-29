import React, { Component } from 'react';

import NewsList from '../containers/news-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <NewsList />
      </div>
    );
  }
}
