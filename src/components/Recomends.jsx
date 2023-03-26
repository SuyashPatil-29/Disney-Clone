import styled from "styled-components";
import { Link } from "react-router-dom";
import React from 'react';

const Recomends = () => {
    return (
        <Container>
            <h4>Recomended For You...</h4>
            <Content>
                <Wrap>
                    <Link to="/" >
                        <img src="https://i.pinimg.com/564x/7b/b5/3d/7bb53dbcf8429535226f4df3d154213c.jpg" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/" >
                        <img src="https://i.pinimg.com/564x/85/ee/ea/85eeead27305ff360fe42aeda1ee2158.jpg" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/" >
                        <img src="https://i.pinimg.com/564x/79/2e/1a/792e1af9f79eed62229756e04adaff27.jpg" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/" >
                        <img src="https://i.pinimg.com/564x/77/4e/72/774e723a2594e176dd0c2fbc83027d58.jpg" alt="" />
                    </Link>
                </Wrap>
            </Content>
        </Container>
    );
}

const Container = styled.div`
padding: 0 0 26px;
margin: 60px 30px;
`

const Content = styled.div`
display: grid;
gap: 25px;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr) );

@media (max-width: 768px){
    grid-template-columns: repeat(2, minmax(0,1fr));
}
`
const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  
  
  img{
      inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
    
    &:hover{
        border-radius: 12px;
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.01);
    }

    &:hover{
    border: 5px solid rgba(249, 249, 249, 0.8);
    }
}


`



export default Recomends;


