import "./sidebar.css"
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School
} from "@mui/icons-material"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="side-wrapper">
                <ul className="sidebar-list">

                    {/* * * Feed * * */}
                    <li className="sidebar-list-item">
                        <RssFeed className="sidebar-icon"/>
                        <span className="sidebar-list-item-text">
                            Feed
                        </span>
                    </li>

                    {/* * * Chats * * */}
                    <li className="sidebar-list-item">
                        <Chat className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Chats
                        </span>
                    </li>

                    {/* * * Videos * * */}
                    <li className="sidebar-list-item">
                        <PlayCircleFilledOutlined className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Videos
                        </span>
                    </li>

                    {/* * * Groups * * */}
                    <li className="sidebar-list-item">
                        <Group className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Groups
                        </span>
                    </li>

                    {/* * * Bookmarks * * */}
                    <li className="sidebar-list-item">
                        <Bookmark className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Bookmarks
                        </span>
                    </li>

                    {/* * * Questions * * */}
                    <li className="sidebar-list-item">
                        <HelpOutline className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Questions
                        </span>
                    </li>

                    {/* * * Jobs * * */}
                    <li className="sidebar-list-item">
                        <WorkOutline className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Jobs
                        </span>
                    </li>

                    {/* * * Events * * */}
                    <li className="sidebar-list-item">
                        <Event className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Events
                        </span>
                    </li>

                    {/* * * Courses * * */}
                    <li className="sidebar-list-item">
                        <School className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Courses
                        </span>
                    </li>
                </ul>

                <button className="sidebar-btn">Show More</button>

                <hr className="sidebar-hr" />

                <ul className="sidebar-friend-list">
                    <li className="sidebar-friend">
                        <img className="sidebar-friend-img" src="/assets/person/img-2.jpg" alt="" />
                        <span className="sidebar-friend-name">Jon Doe</span>
                    </li>
                    <li className="sidebar-friend">
                        <img className="sidebar-friend-img" src="/assets/person/img-2.jpg" alt="" />
                        <span className="sidebar-friend-name">Jon Doe</span>
                    </li>
                    <li className="sidebar-friend">
                        <img className="sidebar-friend-img" src="/assets/person/img-2.jpg" alt="" />
                        <span className="sidebar-friend-name">Jon Doe</span>
                    </li>
                    <li className="sidebar-friend">
                        <img className="sidebar-friend-img" src="/assets/person/img-2.jpg" alt="" />
                        <span className="sidebar-friend-name">Jon Doe</span>
                    </li>
                    <li className="sidebar-friend">
                        <img className="sidebar-friend-img" src="/assets/person/img-2.jpg" alt="" />
                        <span className="sidebar-friend-name">Jon Doe</span>
                    </li>
                    <li className="sidebar-friend">
                        <img className="sidebar-friend-img" src="/assets/person/img-2.jpg" alt="" />
                        <span className="sidebar-friend-name">Jon Doe</span>
                    </li>
                    <li className="sidebar-friend">
                        <img className="sidebar-friend-img" src="/assets/person/img-2.jpg" alt="" />
                        <span className="sidebar-friend-name">Jon Doe</span>
                    </li>
                    <li className="sidebar-friend">
                        <img className="sidebar-friend-img" src="/assets/person/img-2.jpg" alt="" />
                        <span className="sidebar-friend-name">Jon Doe</span>
                    </li>
                    <li className="sidebar-friend">
                        <img className="sidebar-friend-img" src="/assets/person/img-2.jpg" alt="" />
                        <span className="sidebar-friend-name">Jon Doe</span>
                    </li>
                    <li className="sidebar-friend">
                        <img className="sidebar-friend-img" src="/assets/person/img-2.jpg" alt="" />
                        <span className="sidebar-friend-name">Jon Doe</span>
                    </li>
                    <li className="sidebar-friend">
                        <img className="sidebar-friend-img" src="/assets/person/img-2.jpg" alt="" />
                        <span className="sidebar-friend-name">Jon Doe</span>
                    </li>
                    <li className="sidebar-friend">
                        <img className="sidebar-friend-img" src="/assets/person/img-2.jpg" alt="" />
                        <span className="sidebar-friend-name">Jon Doe</span>
                    </li>
                    <li className="sidebar-friend">
                        <img className="sidebar-friend-img" src="/assets/person/img-2.jpg" alt="" />
                        <span className="sidebar-friend-name">Jon Doe</span>
                    </li>
                    <li className="sidebar-friend">
                        <img className="sidebar-friend-img" src="/assets/person/img-2.jpg" alt="" />
                        <span className="sidebar-friend-name">Jon Doe</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}