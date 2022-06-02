import React from 'react'

const ImageSpacer = () => {
    return (
        <>

            <div style={{ width: '100%', height: '200px', overflow: "hidden"}}>
                <div style={{position: 'absolute', marginTop:'70px', width: '100%', color: 'white', textAlign: 'center', fontSize: '2rem', fontFamily: 'font2'}}>
                    Shop Disposables
                </div>
                <img style={{ width: "100%"}} src={require('../Assets/wallpapersden.com_blue-yellow-pink-4k-layer-forming_3840x2160.jpg')} alt='logo'/>
            </div>
        </>
    )
}

export default ImageSpacer