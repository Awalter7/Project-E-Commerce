import React from 'react'
import {Container, Wrapper} from "./Components/AccountElements";
import AccountImg from "./Assets/img_319029.png"
import {AccountCircle} from "@material-ui/icons";

const Account = () => {
    return (
        <>
            <Container >
                <Wrapper >
                    <image style={{width: 'max-content', height: 'max-content'}} src={AccountImg} />
                    test
                </Wrapper>
            </Container>
        </>
    )
}

export default Account