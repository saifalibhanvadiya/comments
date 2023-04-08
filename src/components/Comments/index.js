import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Commentitem from '../CommentItem/index'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    usercomments: '',
    count: 0,
  }

  adduserComment = () => {
    const {name, comment} = this.state
    const initclassnamefotbackground =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLike: false,
      initclassName: initclassnamefotbackground,
    }
    console.log(newComment)
    this.setState(prevstate => ({
      commentsList: [...prevstate.commentsList, newComment],
      name: '',
      comment: '',
      count: prevstate.count + 1,
    }))
  }

  isStatusLikedislike = id => {
    const {commentsList} = this.state
    this.setState(prevstate => ({
      commentsList: prevstate.commentsList.map(likeeach => {
        if (id === likeeach.id) {
          return {...likeeach, isLike: !likeeach.isLike}
        }
        return likeeach
      }),
    }))
    console.log(commentsList)
  }

  deleteUserComment = id => {
    const {commentsList} = this.state
    const filtercomments = commentsList.filter(eachid => eachid.id !== id)
    this.setState({commentsList: filtercomments})
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  Onchangename = event => {
    this.setState({name: event.target.value})
  }

  CommentBox = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {count, commentsList, name, comment} = this.state

    return (
      <div className="container">
        <div className="monnetContainer">
          <div className="commentbox">
            <h1 className="commentheading">Comments</h1>
            <label className="user" htmlFor="user">
              Say Somthing about 4.0 Technologies
            </label>
            <input
              className="input"
              type="text"
              placeholder="Your Name"
              onChange={this.Onchangename}
              value={name}
            />
            <textarea
              className="input"
              rows={6}
              cols={40}
              placeholder="Your Comment"
              onChange={this.CommentBox}
              value={comment}
            />
            <button className="addcomment" onClick={this.adduserComment}>
              Add Comment
            </button>
          </div>
          <div>
            <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" />
          </div>
        </div>
        <hr className="hr1" />
        <p className="comments">
          <span className="countcomment">{count}</span> comments
        </p>
        <ul>
          {commentsList.map(each => (
            <Commentitem
              commentitem={each}
              key={each.id}
              isStatusLikedislike={this.isStatusLikedislike}
              deleteUserComment={this.deleteUserComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
