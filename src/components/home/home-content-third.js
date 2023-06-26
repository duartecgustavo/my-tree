import styled from "styled-components";
import { Colors } from "../../styles/design.tokens";
import Img_arvores from '../../assets/imagem_arvores.png';


const ContentThirdStyle = styled.div`
    height: 100vh;
    background-color: ${Colors.BLUE_MAIN};
    display: flex;
    flex-direction: column;
    
    .section-second-title-blue {
        height: 25vh;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .section-second-blue {
        display: flex;
        justify-content: space-between;
        

        section {
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



    p {
        font-size:42px;
        font-weight: lighter;
        color: ${Colors.WHITE}
    }

    @media (max-width: 992px) {
        height: auto;
        .section-second-blue {
            section {
                height: auto;
                margin: 20px 0px;;
            }

            & section:nth-child(2){
                div {
                    margin: 10px 0px;
                }
            }
        }
    }

`;

const Section = styled.section`

`;

export default function ContentThird() {
    return (
        <ContentThirdStyle>
            <div className="container">

                <Section className="section-second-title-blue">
                    <p>Plante sua árvore e veja como ela está sendo cuidada.</p>
                </Section>
                <Section className="row section-second-blue">
                    <Section className="col-12 col-lg-6">
                        <img src={Img_arvores} alt="teste" className="img-fluid" />
                    </Section>
                    <Section className="col-12 col-lg-6">
                        <div>Quem esta cuidando?</div>
                        <div>Consumo de CO2</div>
                        <div>Contribuir com uma nova árvore</div>
                    </Section>
                </Section>
            </div>
        </ContentThirdStyle>
    )
}