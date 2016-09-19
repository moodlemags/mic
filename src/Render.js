import React, { Component } from 'react';
import './styling/App.css';
import firebase from './util/helpers.js';
let _ = require('agile')

class Render extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      articles: [],
      render: [],
      wordCount: [],
      publishedAt: []
    }
  }

  componentWillMount() {

    let i
    console.log('mounting props', this.props);
    let data = this.props.articles
    // console.log(data);
    for (i = 0; i < 11; i++) {
      console.log('will mountfirst set', data[i]);
        this.state.render.push(data[i])
      }
      // console.log(this.state);
    }


  componentDidMount() {
    console.log(this.state);

  }


  onClick(event) {
    console.log('clicking');
    this.clearState();
  }

  clearState() {
    this.setState({ render: [] });
    console.log('cleared state');
    console.log('count', this.state.count);
    if (this.state.count <= 2) {
      this.handleRender();
    } else if (this.state.count === 3) {
      console.log('will ajax');
      this.handleAjax();
    }
  }

  handleRender(event) {
    let i
    let sliced
    let data = this.props.articles
      if (this.state.count <= 1) {
        console.log("second 10 articles rendered", sliced);
        sliced = data.slice(10, 21)
        this.setState({ count: this.state.count + 1 })
      } else if (this.state.count === 2) {
        sliced = data.slice(20, 30)
        this.setState({ count: this.state.count + 1 })
        console.log( "third 10 articles rendered", sliced);
      }
    let words = []
    let new_render = []
    console.log('sliced', sliced);
    for (i = 0; i < sliced.length; i++) {
      console.log('looping',i, sliced[i]);
        new_render.push(sliced[i])
        words.push(sliced[i].words)
      }
      console.log('render array', new_render, words);
      this.setState({ render: new_render, wordCount: words})
  }

  handleAjax() {
    console.log('hitting ajax');
      if (this.state.count === 3) {
      firebase.getMore().then(res => {
        let new_render = res.slice(0,11)
        this.setState({render: new_render, count: this.state.count + 1 })
      console.log('saved responses', new_render);
    });
  } else if (this.state.count === 4) {
  firebase.getMore().then(res => {
    let new_render = res.slice(10,21)
    this.setState({render: new_render })
  console.log('saved responses', new_render);
}); }
  }

  handleSort() {
    console.log('sorting', this.state.wordCount.sort(function (a, b) {  return a - b;  }))
      let playing = this.state.render
      playing.sort(function(a, b){
        return a.words-b.words
      })
      console.log(playing);
      this.setState({ render: playing })
  }

  handlePublished() {
    let publishedOn = this.state.render
    publishedOn.sort(function(a,b){
      let c = new Date(a.publish_at);
      let d = new Date(b.publish_at);
      return c-d;
      });
      this.setState({ render: publishedOn})
  }

  render() {
    console.log('the STATE render', this.state);
    return (
      <div>
     <header className="global-header">
          <a className="header-section unpub-articles">UNPUBLISHED ARTICLES(interpolate #)</a>
          <a className="header-section author">AUTHOR</a>
          <a className="header-section words" onClick={(event) => this.handleSort(event)}>WORDS</a>
          <a className="header-section submitted" onClick={(event) => this.handlePublished(event)}>SUBMITTED</a>
      </header>
      <section>
        <div className="article-section-styleone">
          <span className="unpub-articles"><img src={this.state.render[0].image} height="70px" width="auto"/> {this.state.render[0].title}</span>
          <span className="author">{this.state.render[0].profile.first_name} {this.state.render[0].profile.last_name}</span>
          <span className="words">{this.state.render[0].words}</span>
          <span className="submitted">{this.state.render[0].publish_at}</span>
        </div>
        <div className="article-section-styletwo">
          <span className="unpub-articles"><img src={this.state.render[1].image} height="70px" width="auto"/> {this.state.render[1].title}</span>
          <span className="author">{this.state.render[1].profile.first_name} {this.state.render[1].profile.last_name}</span>
          <span className="words">{this.state.render[1].words}</span>
          <span className="submitted">{this.state.render[1].publish_at}</span>
        </div>
        <div className="article-section-styleone">
          <span className="unpub-articles"><img src={this.state.render[2].image} height="70px" width="auto"/> {this.state.render[2].title}</span>
          <span className="author">{this.state.render[2].profile.first_name} {this.state.render[2].profile.last_name}</span>
          <span className="words">{this.state.render[2].words}</span>
          <span className="submitted">{this.state.render[2].publish_at}</span>
        </div>
        <div className="article-section-styletwo">
          <span className="unpub-articles"><img src={this.state.render[3].image} height="70px" width="auto"/> {this.state.render[3].title}</span>
          <span className="author">{this.state.render[3].profile.first_name} {this.state.render[3].profile.last_name}</span>
          <span className="words">{this.state.render[3].words}</span>
          <span className="submitted">{this.state.render[3].publish_at}</span>
        </div>
        <div className="article-section-styleone">
          <span className="unpub-articles"><img src={this.state.render[4].image} height="70px" width="auto"/> {this.state.render[4].title}</span>
          <span className="author">{this.state.render[4].profile.first_name} {this.state.render[4].profile.last_name}</span>
          <span className="words">{this.state.render[4].words}</span>
          <span className="submitted">{this.state.render[4].publish_at}</span>
        </div>
        <div className="article-section-styletwo">
          <span className="unpub-articles"><img src={this.state.render[5].image} height="70px" width="auto"/> {this.state.render[5].title}</span>
          <span className="author">{this.state.render[5].profile.first_name} {this.state.render[5].profile.last_name}</span>
          <span className="words">{this.state.render[5].words}</span>
          <span className="submitted">{this.state.render[5].publish_at}</span>
        </div>
        <div className="article-section-styleone">
          <span className="unpub-articles"><img src={this.state.render[6].image} height="70px" width="auto"/> {this.state.render[6].title}</span>
          <span className="author">{this.state.render[6].profile.first_name} {this.state.render[6].profile.last_name}</span>
          <span className="words">{this.state.render[6].words}</span>
          <span className="submitted">{this.state.render[6].publish_at}</span>
        </div>
        <div className="article-section-styletwo">
          <span className="unpub-articles"><img src={this.state.render[7].image} height="70px" width="auto"/> {this.state.render[7].title}</span>
          <span className="author">{this.state.render[7].profile.first_name} {this.state.render[7].profile.last_name}</span>
          <span className="words">{this.state.render[7].words}</span>
          <span className="submitted">{this.state.render[7].publish_at}</span>
        </div>
        <div className="article-section-styleone">
          <span className="unpub-articles"><img src={this.state.render[8].image} height="70px" width="auto"/> {this.state.render[8].title}</span>
          <span className="author">{this.state.render[8].profile.first_name} {this.state.render[8].profile.last_name}</span>
          <span className="words">{this.state.render[8].words}</span>
          <span className="submitted">{this.state.render[8].publish_at}</span>
        </div>
        <div className="article-section-styletwo">
          <span className="unpub-articles"><img src={this.state.render[9].image} height="70px" width="auto"/> {this.state.render[9].title}</span>
          <span className="author">{this.state.render[9].profile.first_name} {this.state.render[9].profile.last_name}</span>
          <span className="words">{this.state.render[9].words}</span>
          <span className="submitted">{this.state.render[9].publish_at}</span>
        </div>
        <button onClick={(event) => this.onClick(event)}>Load More</button>
      </section>
      </div>
  )}
}

export default Render;
