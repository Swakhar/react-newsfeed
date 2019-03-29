import React, { Component } from "react";
import ReactDOM from "react-dom";
//import axios from "axios";
import ReactHtmlParser from 'react-html-parser';
import jsonResponse from './JsonResponse';

import AnnouncementNews from './AnnouncementNews';
import NewIdea from './NewIdeas';
import CommentNetworkNews from './CommentNetworkNews';
import CommentOnIdea from './CommentOnIdea';

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
      (news_item, index) => {
        if(news_item.type === 'announcement') {
          return (
            <div className="row announcement" key={index}>
              <div className="date"> {ReactHtmlParser(news_item.time)} </div>
              <div className="circle"></div>
              {news_item.items.map(
                item => (
                  (
                    <AnnouncementNews
                      {...item}
                      key={item.id}
                    />
                  )
                )
              )}
            </div>
          )
        }
        else if(news_item.type === 'love_from_network') {
          return (
            <div className="row new-idea" key={index}>
              <div className="date"> {ReactHtmlParser(news_item.time)} </div>
              <div className="circle"></div>
              <div className="context">
                <h4>New ideas from your network</h4>
                <div className="images">
                  {news_item.items.map(
                    item => (
                      (
                        <NewIdea
                          {...item}
                          key={item.id}
                        />
                      )
                    )
                  )}
                </div>
              </div>
            </div>
          )
        }
        else if(news_item.type === 'comment_from_network') {
          return (
            <div className="row comment-network" key={index}>
              <div className="date"> {ReactHtmlParser(news_item.time)} </div>
              <div className="circle"></div>
              <div className="context">
                <h4>New comments from your network</h4>
                {news_item.items.map(
                  item => (
                    (
                      <CommentNetworkNews
                        {...item}
                        key={item.id}
                      />
                    )
                  )
                )}
              </div>
            </div>
          )
        }
        else if(news_item.type === 'comment_on_own_comment_on_idea') {
          return (
            <div className="row comment-network" key={index}>
              <div className="date"> {ReactHtmlParser(news_item.time)} </div>
              <div className="circle"></div>
              <div className="context">
                {news_item.items.map(
                  item => (
                    (
                      <CommentOnIdea
                        {...item}
                        key={item.id}
                      />
                    )
                  )
                )}
              </div>
            </div>
          )
        }
        else {
          return(
            <div className="row" key={index}>
              <div className="date"> {ReactHtmlParser(news_item.time)} </div>
              <div className="circle"></div>
            </div>
          )
        }
      },
    );
    return <div>{newsFeedData}</div>
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
