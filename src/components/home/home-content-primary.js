import styled from 'styled-components';
import Background from '../../assets/Background.png';
import Img_home from '../../assets/imagem_home.png';
import { Colors } from '../../styles/design.tokens';

const ContentPrimaryStyle = styled.div`
    display: flex;
    align-items: center;

    height: 100vh;
    
    background-image: url(${Background});
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;
    
    .ContentPrimaryContainer {
        display: flex; 
        justify-content: space-between;
        align-items: center;
    }

    .div-row{
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

    @media (max-width: 768px) {

        div > Section > h1, p {
            color: ${Colors.WHITE};
            text-align: center;
        }
        
    }
`;

const Section = styled.section`

`;

export default function ContentPrimary() {
    return (
        <ContentPrimaryStyle>
            <div className="container">
                <div className="row div-row">
                    <Section className="section-home-titles col-12 col-lg-6">
                        <h1>Bem-vindo</h1>
                        <p>Embarque em um novo mundo!</p>
                    </Section>
                    <Section className="col-12 col-lg-6">
                        <img src={Img_home} alt="teste" className="img-fluid" />
                    </Section>
                </div>
            </div>
        </ContentPrimaryStyle>
    )
}