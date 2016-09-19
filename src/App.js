import React, { Component } from 'react';
import './styling/App.css';
import Render from './Render.js';
import articleData from './data/articles.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],

    }
  }

  componentWillMount() {
    this.setState({
      articles: articleData
    })
  }


  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
      articles: this.state.articles
    }))
    console.log('props', this.props);
    console.log('state', this.state);
    return (
      <div className="main-componenet">
        <Render Child articles={this.state.articles}/>
        <div>{childrenWithProps}</div>
      </div>
    );
  }
}

export default App;
