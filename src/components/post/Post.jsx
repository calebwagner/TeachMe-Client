import "./post.css"
import { MoreVert } from "@mui/icons-material"


export default function Post({ post, Users }) {
    const foundUserObj = Users.find((u) => u.id === post.userId)
    const userName = foundUserObj.username ? foundUserObj.username : "Oops name not found!"

    const userPhoto = foundUserObj.profilePicture ? foundUserObj.profilePicture : "Oops name not found!"
    console.log(foundUserObj.profilePicture)
    console.log("rendering ...")

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
                        <img className="like-icon" src="/assets/like.png" alt="" />
                        <img className="like-icon" src="/assets/heart.png" alt="" />
                        <span className="post-like-counter">{post.like} people liked</span>
                    </div>
                    <div className="post-botton-right">
                        <span className="post-comment-text">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}