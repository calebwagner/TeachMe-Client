import React from 'react';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import TopBar from '../../components/topbar/Topbar';
import "./home.css"

export default function Home() {
    return (
        <>
          <TopBar />
          <div className="home-container">
                <Sidebar />
                <Feed />
                <Rightbar />
          </div>
        </>
    )
}