import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const CommentNetworkNews = props => (
    <React.Fragment>
      <div className="comments">
        <div className="image-details">
            <img src={props.object.image} alt={props.object.name} className="object-image" />
            <img src={props.user.image} alt={props.user.name} className="user-image" />
        </div>
        <div className="content-text">
            {ReactHtmlParser(props.text.content)}
        </div>
      </div>
    </React.Fragment>
)

export default CommentNetworkNews;
