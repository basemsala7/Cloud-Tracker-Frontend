import React from 'react'
import bannerbackground from "../assets/wave.png"
import bannerimage from "../assets/pana.png"
import leftbannar from "../assets/pen tool.png"

const Home = () => {
    return (
        <div>
            <div>
                <img className="absolute top-20 left-0" src={leftbannar} alt="" width={150} />
                <img className="absolute top-[-1px] right-0" src={bannerbackground} alt="" width={750} />
                <img className="absolute top-0 right-0 mt-32 mr-40" src={bannerimage} alt="" width={570} />
            </div>
        </div>
    );
}

export default Home


