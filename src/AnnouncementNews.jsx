import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const AnnouncementNews = props => (
  <div className="row announcement" key={props.id}>
    <div className="date"> {ReactHtmlParser(props.news_item.time)} </div>
    <div className="circle"></div>
    <div className="context">
      <h4>News from jovoto team!</h4>
      <h1>{props.content.subject}</h1>
      <div className="content-text">{ReactHtmlParser(props.content.text)}</div>
    </div>
  </div>
)

export default AnnouncementNews;