import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { useState } from "react"


export default function Post({ post, Users }) {

    // sets the initial state (useState(1) would be 1 "like" in UI)
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLike] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLike(!isLiked)
    }

    const foundUserObj = Users.find((u) => u.id === post.userId)
    const userName = foundUserObj.username ? foundUserObj.username : "Oops name not found!"
    const userPhoto = foundUserObj.profilePicture ? foundUserObj.profilePicture : "/assets/person/default-placeholder.jpg"

    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img className="post-profile-img" src={userPhoto} alt="" />
                        <span className="post-username">{userName}</span>
                        <span className="post-date">{post.date}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">
                        {post.desc ? post.desc : ""}
                    </span>
                    <img className="post-img" src={post.photo} alt="" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img className="like-icon" src="/assets/like.png" onClick={likeHandler} alt="" />
                        <img className="like-icon" src="/assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="post-like-counter">{like} people liked</span>
                    </div>
                    <div className="post-botton-right">
                        <span className="post-comment-text">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}