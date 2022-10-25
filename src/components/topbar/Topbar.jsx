import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

export default function TopBar() {
    return (
        <div className="topbar-container">
            <div className="topbar-left">
                <span className="logo">MySocial</span>
            </div>
            <div className="topbar-center">
                <div className="searchbar">
                    <Search className="search-icon"/>
                    <input placeholder="Search for friends, post, or video" type="text" className="search-input" />
                </div>
            </div>
            <div className="topbar-right">
                <div className="topbar-links">
                    <span className="topbar-link">Homepage</span>
                    <span className="topbar-link">Timeline</span>
                </div>
                <div className="topbar-icons">
                    <div className="topbar-icon-item">
                        <Person />
                        <span className="topbar-icon-badge">1</span>
                    </div>
                    <div className="topbar-icon-item">
                        <Chat />
                        <span className="topbar-icon-badge">2</span>
                    </div>
                    <div className="topbar-icon-item">
                        <Notifications />
                        <span className="topbar-icon-badge">3</span>
                    </div>
                </div>
                <img src="/assets/person/image-1.png" alt="" className="topbar-image" />
            </div>
        </div>
    )
}