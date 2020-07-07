// add Comment component here
<<<<<<< HEAD
import React, { Component } from 'react';

export default class Comment extends Component {
  render() {
    return (
      <div id="comment" className="comment">
        {this.props.commentText}
      </div>
    )
=======
import Reach, { Component } from 'react';

export default class Comment extends Component {
  render() {
    return {
      <div className="comment">
        {this.props.commentText}
      </div>
    }
>>>>>>> d20e63a290a1ad381adf54e9d295e3324fc6bceb
  }
}
