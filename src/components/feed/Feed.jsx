import Post from "../post/Post"
import Share from "../sharedcomponents/Share"
import "./feed.css"
import { Posts } from "../../dummyData";
import { Users } from "../../dummyData";


export default function Feed() {

    return (
        <div className="feed">
            <div className="feed-wrapper">
                <Share />
                {Posts.map((p) => {
                    return (
                        <Post key={p.id} post={p} Users={Users} />
                )})}
            </div>
        </div>
    )
}