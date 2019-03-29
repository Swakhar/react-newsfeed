import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const CommentOnIdea = props => (
    <React.Fragment>
      <h4>
        <span>{props.user.name}</span> {props.user.jo ? <span className="jo">jo</span> : null } commented on your idea!
      </h4>
      <div className="comments">
        <div className="image-details">
            <img src={props.idea.image} alt={props.idea.name} />
            <img src={props.user.image} alt={props.user.name} className="user-image" />
        </div>
        <div className="content-text">
          {ReactHtmlParser(props.text.content)}
        </div>
      </div>
    </React.Fragment>
)

export default CommentOnIdea;
