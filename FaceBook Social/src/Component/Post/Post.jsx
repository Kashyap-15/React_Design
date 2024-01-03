import React, { useState } from 'react'
import "./Post.css"
import { MoreVert } from '@mui/icons-material'
import { Users } from '../../DummyData'

export default function Post({post}) {
    const [like, setLike] = useState(post.Like)
    const [isliked, setIsLiked] = useState(false)

    function likehandler() {
        setLike(isliked ? like-1 : like+1)
        setIsLiked(!isliked)
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u)=> u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">{Users.filter((u)=> u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postCenterText">{post.desc}</span>
                <img src={post.photo} alt="" className="postCenterImg" />
            </div>
            <div className="postBottom">
                  <div className="postButtonLeft">
                      <svg
                          className="postLikeIcon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill={!isliked ? "blue" : "white"}
                          viewBox="0 0 24 24"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          onClick={()=>likehandler()}
                      >
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <span className="postLikeCOunter"> {like} people Liked your Post</span>
                  </div>
                <div className="postButtonRight">
                    <span className="postCommentText"> {post.comment} comments </span>
                </div>
            </div>
        </div>
    </div>
  )
}
