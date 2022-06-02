import React from 'react'
import {ContainerCollumn, ImageContainer, Row, TextContainer, Wrapper} from "../Elements/HomePageElements";
import {Button, Tooltip} from "@mui/material";


const PopUp = ({handleToggleConfirmAge, confirmAgeVisibility}) => {
    console.log(confirmAgeVisibility, '1')


    return (
        <>
            <ContainerCollumn style={{ top: '0px', backgroundColor: 'rgba(0, 0, 0, 0.73)', position: 'fixed', width: '100%', height: '100%', visibility: confirmAgeVisibility, zIndex: '900'}}>
                <Wrapper style={{padding: '10px', backgroundColor: '#000', zIndex: '10000'}}>
                    <Wrapper style={{padding: '0px', justifyContent: 'row', maxWidth: '600px', backgroundImage: "url('https://www.hdwallpapers.in/download/colorful_fluid_shapes_lines_black_background_4k_hd_abstract-HD.jpg')", backgroundSize: '100% 100%'}}>
                        <img style={{filter: 'drop-shadow(2px 2px 8px #000)', margin: '2z0px', width: "150px"}}src={require('../Assets/icon.png')} alt='logo'/>
                        <TextContainer style={{fontFamily: 'font2', fontSize: '20px', color: 'white', textAlign: 'center', width: '100%', margin: '50px', marginLeft: '0px', marginRight: '0px', textShadow: '2px 2px 8px #000'}}>
                            Are you of 21 years of age or older, and the legal smoking age in your state?
                        </TextContainer>
                        <Row style={{width: '100%', justifyContent: 'space-between'}}>
                            <Button onClick={() => (handleToggleConfirmAge())} style={{ height: '65px', width: 'min-content', color: "white", border: "2px solid white", borderRadius: "50px", marginBottom: '10px', marginTop: '10px', margin: '20px'}}>Yes</Button>
                            <Button  onClick={() => (window.close())} style={{ height: '65px', width: 'min-content', color: "white", border: "2px solid white", borderRadius: "50px", marginBottom: '10px', marginTop: '10px', margin: '20px'}}>No</Button>
                        </Row>
                    </Wrapper>
                </Wrapper>
            </ContainerCollumn>
        </>
    )
}

export default PopUp;