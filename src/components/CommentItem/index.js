// Write your code here
import './index.css'

const Commentitem = props => {
  const {commentitem, isStatusLikedislike, deleteUserComment} = props
  const {id, name, comment, isLike, initclassName, date} = commentitem

  const colorlike = isLike ? 'likecolor' : ''

  const likedislikebtn = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeDislike = () => {
    isStatusLikedislike(id)
  }

  const deleteComnnet = () => {
    deleteUserComment(id)
  }

  return (
    <li className="listcontainer">
      <div className="comment">
        <p className={`userfirstlaer ${initclassName}`}>{name[0]}</p>

        <div>
          <p className="name">
            {name}
            <span className="time">{date.toLocaleTimeString()}</span>
          </p>
          <p className="usercomment">{comment}</p>
        </div>
      </div>

      <div className="btnbox">
        <button className="btn" onClick={likeDislike}>
          <img className="imglike" src={likedislikebtn} alt="like" />
          <span className={`${colorlike}`}> Like </span>
        </button>
        <button className="btn" onClick={deleteComnnet} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="hr" />
    </li>
  )
}
export default Commentitem
