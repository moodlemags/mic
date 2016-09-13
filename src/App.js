import React, { Component } from 'react';
import './styling/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="global-header">
            <a className="header-section unpub-articles">UNPUBLISHED ARTICLES(interpolate #)</a>
            <a className="header-section author">AUTHOR</a>
            <a className="header-section words">WORDS</a>
            <a className="header-section submitted">SUBMITTED</a>
        </header>

        <section className="render-articles">
          To get started, edit <code>src/App.js</code> and save to reload.
        </section>
      </div>
    );
  }
}

export default App;
