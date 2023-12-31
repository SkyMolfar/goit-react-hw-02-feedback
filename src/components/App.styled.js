import styled from 'styled-components';


export const Container = styled.div`
    position: fixed;
top: 50%;
left: 0;
right: 0;
transform: translateY(-50%);
height: 500px;
width: 1000px;
display: flex;
justify-content: center;
align-items: center;
font-size: 40px;
color: #010101;
border-radius: 3px;
border: 1px solid blue;
background-color: gainsboro;
margin: auto;
gap: 50px;

`;

export const NoFeedback = styled.p`
    text-align: center;
    font-size: 18px;
    color: gray;
    width: 100%;
    margin: 0 auto;
`;
