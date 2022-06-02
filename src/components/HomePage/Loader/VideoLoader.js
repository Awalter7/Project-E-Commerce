import React from 'react';
import video from './smoke.mp4'
import "./VideoLoader.css"

const VideoLoader = () => {

    return(
        <>
            <section class='smokeComponent'>
                <video src={video} autoPlay muted>
                </video>
                <h1>
                    <span>
                        N
                    </span>
                    <span>
                        U
                    </span>
                    <span>
                        B
                    </span>
                    <span>
                        A
                    </span>
                    <span>
                        S
                    </span>
                    <span>
                        A
                    </span>
                    <span>
                        T
                    </span>
                    <span>
                        L
                    </span>
                    <span>
                        A
                    </span>
                    <span>
                        S
                    </span>
                </h1>
            </section>
        </>
    )
};

export default VideoLoader