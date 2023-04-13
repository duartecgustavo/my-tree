import styled from 'styled-components';
import Background from '../../assets/Background.png';
import { Colors } from '../../styles/design.tokens';

export const Navbar = styled.div`
    height: 100px;
    width: 100%;
    
    display: flex;
    align-items: center;
    background-color: #00afef44;
    position: absolute;
    top: 0;

    p {
        color: ${Colors.WHITE};
        font-weight: lighter;
    }

    div {
        display: flex;
        justify-content: space-between 
    }

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        font-weight: bold;
        font-size:  2.5rem;
        color: ${Colors.WHITE};
        
        &:hover {
            color: ${Colors.WHITE_GRAY};
        }
    }

    h1:hover {
        color: ${Colors.WHITE};
        cursor: cell;
        font-weight: bold;
    }
`;

export const ContentPrimary = styled.div`
    height: 100vh;
    background-image: url(${Background});
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .section-home-titles {
        height: 16vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    div > Section > h1, p {
        color: ${Colors.WHITE};
    }
    div > Section > p {
        font-weight: lighter;
        font-size: 28px;
    }
`;

export const ContentThird = styled.div`
    height: 100vh;
    background-color: ${Colors.BLUE_MAIN};
    display: flex;
    flex-direction: column;

    .section-second-blue {
        display: flex;
        justify-content: space-between;
        
            section {
                width: 100%;
                height: 75vh;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            & section:nth-child(2){
                gap: 5%;

                div {
                    width: 70%;
                    padding: 20px;
                    border-radius: 8px;
                    font-size: 32px;
                    text-align: center;
                    font-weight: bold;
                    color: ${Colors.WHITE_GRAY};
                    background-color: ${Colors.BLUE_LIGHT};
                    
                    &:hover {
                        color: ${Colors.BLACK_GRAY};
                        background-color: ${Colors.BLUE_LIGHT2};
                        cursor:cell;
                    }
                }
            }
    }

    .section-second-title-blue {
        height: 25vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p {
        font-size:42px;
        font-weight: lighter;
        color: ${Colors.WHITE}
    }

`;

export const ContentSecondary = styled.div`
    p {
        font-size: 28px;
        text-align: center;
        font-weight: lighter;
        padding: 100px;
    }
    p:nth-child(2) {
        padding-top: 0px;
        font-weight: bold;
    }
`;

export const ContentSecondaryCard = styled.div`
    padding: 15px;
    margin: 15px;
    text-align: center;

    h3 {
        margin-bottom: 20px;
    }

    div{
        position: relative;
        border-radius: 100%;
        cursor: cell;
    }

    .bolinha {
        position: absolute;
        top: 70%;
        left: 80%;
        z-index: 1;
        background-color: ${props => props.color};
        border: 5px solid ${Colors.WHITE_GRAY};
        width: 30px;
        height: 30px;
        border-radius: 50%;

        &:hover {
            border: 5px solid ${Colors.BLUE_MAIN};
        }
    }

`;

export const Section = styled.section`

`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
    gap: 20px;
    
    div {
        padding: 100px;
        display: flex;
        gap: 45px;
    }
    
    p {
        font-size: 18px;
        letter-spacing: 0.5px;
        padding: 12px;
        margin-bottom: 0px !important;
        color: ${Colors.BLACK_GRAY};
    }
    a {
        font-size: 18px;
        letter-spacing: 0.5px;
        padding: 12px;
        margin-bottom: 0px !important;
        text-decoration: none;
        color: ${Colors.BLACK_GRAY};
        &:hover {
            color: ${Colors.BLUE_MAIN} !important;
        }
    }   
`;
