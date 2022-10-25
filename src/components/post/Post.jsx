import "./post.css"
import { MoreVert } from "@mui/icons-material"


export default function Post() {
    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img className="post-profile-img" src="/assets/person/img-3.jpg" alt="" />
                        <span className="post-username">Jane Doe</span>
                        <span className="post-date">5 mins ago</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">
                        Hey! It's my first post :)
                    </span>
                    <img className="post-img" src="/assets/person/img-3.jpg" alt="" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img className="like-icon" src="/assets/like.png" alt="" />
                        <img className="like-icon" src="/assets/heart.png" alt="" />
                        <span className="post-like-counter">32 people liked</span>
                    </div>
                    <div className="post-botton-right">
                        <span className="post-comment-text">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}