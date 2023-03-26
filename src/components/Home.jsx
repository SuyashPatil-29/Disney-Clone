import styled from "styled-components";

import React from 'react';
import ImgSlider from "./ImgSlider";
import Viwers from "./Viwers";

const Home = () => {
    return (
        <Container>
            <ImgSlider/>
            <Viwers/>
        </Container>
    );
}

export default Home;


const Container= styled.main`
/* margin: 200px; */
height: 100vh;
position: relative;
overflow-x: hidden;
top: 72px;
left:0;
width: fit-content;
padding: 0 calc(3.5vw + 5px);

@media (max-width: 456px){
    height: 100vh;
    position: relative;
    overflow-x: hidden;
    top: 72px;
    left:0;
    width: fit-content;
    padding: 0 calc(3.5vw + 5px);
}

&:after{
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
}
`