import "./rightbar.css"

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbar-wrapper">
                <div className="birthday-container">
                    <img className="birthday-img" src="/assets/gift.png" alt="" />
                    <span className="birthday-text">
                        <b>Pola Foster</b> and <b>3 other friends have a birthday today</b>
                    </span>
                </div>
                <h4 className="rightbar-title">Online Friends</h4>
                <ul className="rightbar-friend-list">
                    <li className="rightbar-friend">
                        <div className="rightbar-profile-img-container">
                            <img className="rightbar-profile-img" src="/assets/person/image-1.png" alt="" />
                            <span className="rightbar-online"></span>
                        </div>
                        <span className="rightbar-username">John Carter</span>
                    </li>

                    <li className="rightbar-friend">
                        <div className="rightbar-profile-img-container">
                            <img className="rightbar-profile-img" src="/assets/person/image-1.png" alt="" />
                            <span className="rightbar-online"></span>
                        </div>
                        <span className="rightbar-username">John Carter</span>
                    </li>

                    <li className="rightbar-friend">
                        <div className="rightbar-profile-img-container">
                            <img className="rightbar-profile-img" src="/assets/person/image-1.png" alt="" />
                            <span className="rightbar-online"></span>
                        </div>
                        <span className="rightbar-username">John Carter</span>
                    </li>

                    <li className="rightbar-friend">
                        <div className="rightbar-profile-img-container">
                            <img className="rightbar-profile-img" src="/assets/person/image-1.png" alt="" />
                            <span className="rightbar-online"></span>
                        </div>
                        <span className="rightbar-username">John Carter</span>
                    </li>

                    <li className="rightbar-friend">
                        <div className="rightbar-profile-img-container">
                            <img className="rightbar-profile-img" src="/assets/person/image-1.png" alt="" />
                            <span className="rightbar-online"></span>
                        </div>
                        <span className="rightbar-username">John Carter</span>
                    </li>

                    <li className="rightbar-friend">
                        <div className="rightbar-profile-img-container">
                            <img className="rightbar-profile-img" src="/assets/person/image-1.png" alt="" />
                            <span className="rightbar-online"></span>
                        </div>
                        <span className="rightbar-username">John Carter</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}