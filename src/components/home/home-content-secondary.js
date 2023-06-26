import styled from 'styled-components';
import HomeContentSecondaryContainer from './home-content-secondary-container';
import { Colors } from '../../styles/design.tokens';
import Adubagem from '../../assets/adubagem.png';
import Amigos from '../../assets/amigos.png';
import Arido from '../../assets/arido.png';
import Jardinagem from '../../assets/jardinagem.png';
import Orquidia from '../../assets/orquidia.png';
import Verduras from '../../assets/verduras.png';

const ContentSecondaryStyle = styled.div`
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

    @media (max-width: 768px) {

        p{
            padding: 20px;
            margin: 50px 0px;;
        }
    }
`;


export default function ContentSecondary() {
    return (
        <ContentSecondaryStyle>
            <div className="container">
                <p>
                    Uma maneira diferente de aprender a cuidar <br />do meio ambiente  com lições diárias.
                </p>
                <div className="row">
                    <HomeContentSecondaryContainer color={Colors.BLUE_LIGHT2} src={Orquidia} title="Cuide de sua orquidia" />
                    <HomeContentSecondaryContainer color={Colors.PINK} src={Amigos} title="Compatilhe com seus amigos" />
                    <HomeContentSecondaryContainer color={Colors.ORANGE} src={Adubagem} title="Como realizar adubo" />
                </div>
                <div className="row" style={{ marginBottom: "100px" }}>
                    <HomeContentSecondaryContainer color={Colors.GREEN} src={Verduras} title="Verduras" />
                    <HomeContentSecondaryContainer color={Colors.YELLOW} src={Jardinagem} title="Jardinagem" />
                    <HomeContentSecondaryContainer color={Colors.RED} src={Arido} title="Local árido" />
                </div>
            </div>
        </ContentSecondaryStyle>
    )
}