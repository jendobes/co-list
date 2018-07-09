import React, { Component } from 'react'


class Comments extends Component {

  constructor(props) {
    super(props)
  }

  renderComments() {
    if(this.props.comments.length){
    return this.props.comments.map(comment =>
      <li key={comment.id}>{comment.body}</li>
      )
    }
  }

  renderNewComment() {
    const { id, body } = this.props.newComment
    if(body){
      return <li key={id}>{body}</li>
    }
  }


render() {
    return (

      <ul>
      {this.renderComments()}
      {this.renderNewComment()}
      </ul>

    )
  }
}


export default Comments
