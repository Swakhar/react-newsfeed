import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const AnnouncementNews = props => (
    <div className="context">
      <h4>News from jovoto team!</h4>
      <h1>{props.content.subject}</h1>
      <div className="content-text">{ReactHtmlParser(props.content.text)}</div>
    </div>
)

export default AnnouncementNews;
