import React from 'react'
import bannerbackground from "../assets/wave.png"
import bannerimage from "../assets/pana.png"
import leftbannar from "../assets/pen tool.png"

const Home = () => {
    return (<div className="home-container">
        <div className="home-banner-container mt-16">
            <img className="absolute top-0 left-0 mt-40" src={leftbannar} alt="" width={150} />
            <img className="absolute top-[47px] right-0" src={bannerbackground} alt="" width={750} />
            <img className="absolute top-0 right-0 mt-32 mr-40" src={bannerimage} alt="" width={570} />
        </div>
    </div>);
}

export default Home


