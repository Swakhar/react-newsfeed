import React, { Component } from "react";
import ReactDOM from "react-dom";
//import axios from "axios";
import jsonResponse from './JsonResponse';

import AnnouncementNews from './AnnouncementNews';

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news_items: []
    };
  }

  // componentDidMount() {
  //   axios.get("https://assets-diverse.s3.amazonaws.com/development/test-task/data4.json").then(result =>
  //       this.setState({
  //         news_items: result
  //       })
  //     );
  // }

  render() {
    const newsFeedData = jsonResponse.data.news.map(
      news_item => (
        news_item.items.map(
          item => {
            if(news_item.type === 'announcement') {
              return (
                <AnnouncementNews
                  {...item}
                  key={item.id}
                  news_item={news_item}
                />
              )
            }
            else if(news_item.type === 'love_from_network') {
              return (
                <div className="news-time" key={item.id}>
                  <h1>{item.subject}</h1>
                  <p>{news_item.time}</p>
                </div>
              )
            }
            else if(news_item.type === 'comment_from_network') {
              return (
                <div className="news-time" key={item.id}>
                  <h1>{item.subject}</h1>
                  <p>{news_item.time}</p>
                </div>
              )
            }
            else {
              console.log(news_item);
              return (
                <div className="news-time" key={item.id}>
                  <h1>{item.subject}</h1>
                  <p>{news_item.time}</p>
                </div>
              )
            }
          }
        )
      ),
    );
    return <div>{newsFeedData}</div>
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
