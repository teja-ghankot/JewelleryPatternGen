// src/pages/ModernPage/ModernPage.jsx
import React from "react";
import Gallery from "../../components/Gallery";
import VideoSection from "../../components/Videosection"
import Navbar from "../../components/Navbar"



const ModernPage = () => {
    return (
        <section className="modern-page">
            <Navbar />
            <VideoSection 
                videoSrc="videos/modernvideo.mp4"
                heading="Modern Gallery"/>
            <Gallery />
        </section>
    );
};

export default ModernPage;