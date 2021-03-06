import styled, { css } from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    @media (min-width: 900px) {
        &:hover {
            background-color: white;
            color: black;
            border: 1px solid black;
        }
    }
`

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    
    @media (min-width: 900px) {
        &:hover {
            background-color: black;
            color: white;
            border: none;
        }
    }
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;
    border: none;

    @media (min-width: 900px) {
        &:hover {
            background-color: #357ae8;
            border: none;
        }
    }
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn)
        return googleSignInStyles;

    return props.inverted ? invertedButtonStyles : buttonStyles
};

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}

    @media (max-width: 900px) {
        font-size: 14px;
        padding: 0 25px;
        min-width: 100px;
    }

    @media (max-width: 367px) {
        font-size: 12px;
        padding: 0 15px;
        min-width: 100px;
    }
`;