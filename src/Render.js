import React, { Component } from 'react';
import './styling/App.css';


class Render extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      // article_one: articleData[0],
      // article_two: articleData[1]
    }
  }

  componentWillMount() {

    let i
    console.log('mounting props', this.props);
    let data = this.props.articles
    console.log(data);
    for (i = 0; i < 11; i++) {
      console.log(data[i]);
        this.state.articles.push(data[i])
      }
      console.log(this.state);
    }


  componentDidMount() {
    console.log(this.state.articles[0].title);

  }

  render() {
    // console.log(this.props);
    return (
      <div>
     <header className="global-header">
          <a className="header-section unpub-articles">UNPUBLISHED ARTICLES(interpolate #)</a>
          <a className="header-section author">AUTHOR</a>
          <a className="header-section words">WORDS</a>
          <a className="header-section submitted">SUBMITTED</a>
      </header>
      <section>
        <div className="article-section-styleone">
          <span className="unpub-articles"><img src={this.state.articles[0].image} height="70px" width="auto"/> {this.state.articles[0].title}</span>
          <span className="author">{this.state.articles[0].profile.first_name} {this.state.articles[0].profile.last_name}</span>
          <span className="words">{this.state.articles[0].words}</span>
          <span className="submitted">{this.state.articles[0].publish_at}</span>
        </div>
        <div className="article-section-styletwo">
          <span className="unpub-articles"><img src={this.state.articles[1].image} height="70px" width="auto"/> {this.state.articles[1].title}</span>
          <span className="author">{this.state.articles[1].profile.first_name} {this.state.articles[1].profile.last_name}</span>
          <span className="words">{this.state.articles[1].words}</span>
          <span className="submitted">{this.state.articles[1].publish_at}</span>
        </div>
        <div className="article-section-styleone">
          <span className="unpub-articles"><img src={this.state.articles[2].image} height="70px" width="auto"/> {this.state.articles[2].title}</span>
          <span className="author">{this.state.articles[2].profile.first_name} {this.state.articles[2].profile.last_name}</span>
          <span className="words">{this.state.articles[2].words}</span>
          <span className="submitted">{this.state.articles[2].publish_at}</span>
        </div>
        <div className="article-section-styletwo">
          <span className="unpub-articles"><img src={this.state.articles[3].image} height="70px" width="auto"/> {this.state.articles[3].title}</span>
          <span className="author">{this.state.articles[3].profile.first_name} {this.state.articles[3].profile.last_name}</span>
          <span className="words">{this.state.articles[3].words}</span>
          <span className="submitted">{this.state.articles[3].publish_at}</span>
        </div>
        <div className="article-section-styletwo">
          <span className="unpub-articles"><img src={this.state.articles[4].image} height="70px" width="auto"/> {this.state.articles[4].title}</span>
          <span className="author">{this.state.articles[4].profile.first_name} {this.state.articles[4].profile.last_name}</span>
          <span className="words">{this.state.articles[4].words}</span>
          <span className="submitted">{this.state.articles[4].publish_at}</span>
        </div>
        <div className="article-section-styleone">
          <span className="unpub-articles"><img src={this.state.articles[5].image} height="70px" width="auto"/> {this.state.articles[5].title}</span>
          <span className="author">{this.state.articles[5].profile.first_name} {this.state.articles[5].profile.last_name}</span>
          <span className="words">{this.state.articles[5].words}</span>
          <span className="submitted">{this.state.articles[5].publish_at}</span>
        </div>
        <div className="article-section-styletwo">
          <span className="unpub-articles"><img src={this.state.articles[6].image} height="70px" width="auto"/> {this.state.articles[6].title}</span>
          <span className="author">{this.state.articles[6].profile.first_name} {this.state.articles[6].profile.last_name}</span>
          <span className="words">{this.state.articles[6].words}</span>
          <span className="submitted">{this.state.articles[6].publish_at}</span>
        </div>
        <div className="article-section-styleone">
          <span className="unpub-articles"><img src={this.state.articles[7].image} height="70px" width="auto"/> {this.state.articles[7].title}</span>
          <span className="author">{this.state.articles[7].profile.first_name} {this.state.articles[7].profile.last_name}</span>
          <span className="words">{this.state.articles[7].words}</span>
          <span className="submitted">{this.state.articles[7].publish_at}</span>
        </div>
        <div className="article-section-styletwo">
          <span className="unpub-articles"><img src={this.state.articles[8].image} height="70px" width="auto"/> {this.state.articles[8].title}</span>
          <span className="author">{this.state.articles[8].profile.first_name} {this.state.articles[8].profile.last_name}</span>
          <span className="words">{this.state.articles[8].words}</span>
          <span className="submitted">{this.state.articles[8].publish_at}</span>
        </div>
        <div className="article-section-styleone">
          <span className="unpub-articles"><img src={this.state.articles[9].image} height="70px" width="auto"/> {this.state.articles[9].title}</span>
          <span className="author">{this.state.articles[9].profile.first_name} {this.state.articles[9].profile.last_name}</span>
          <span className="words">{this.state.articles[9].words}</span>
          <span className="submitted">{this.state.articles[9].publish_at}</span>
        </div>
      </section>
      </div>
  )}
}

export default Render;
