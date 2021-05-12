import React from 'react';
import video from './assets/video.mp4'

const Video = () => {
    return (
        <>
            <video width="750" height="500" controls >
                <source src={video} type="video/mp4"/>
            </video>
        </>
    )
}

export default Video;