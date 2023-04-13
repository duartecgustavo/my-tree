import styled from 'styled-components';
import HomeContentSecondaryContainer from './home-content-secondary-container';
import { Colors } from '../../styles/design.tokens';
import Img1 from '../../assets/img1.png';
import Img2 from '../../assets/img2.png';
import Img3 from '../../assets/img3.png';

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
                <p>
                    Unidade 1
                </p>
                <div className="row">
                    <HomeContentSecondaryContainer color={Colors.BLUE_LIGHT2} src={Img1} title="Cuide de sua orquidia" />
                    <HomeContentSecondaryContainer color={Colors.PINK} src={Img2} title="Compatilhe com seus amigos" />
                    <HomeContentSecondaryContainer color={Colors.ORANGE} src={Img3} title="Como realizar adubo" />
                </div>
                <div className="row" style={{ marginBottom: "100px" }}>
                    <HomeContentSecondaryContainer color={Colors.GREEN} src={Img1} title="Verduras" />
                    <HomeContentSecondaryContainer color={Colors.YELLOW} src={Img2} title="Jardinagem" />
                    <HomeContentSecondaryContainer color={Colors.RED} src={Img3} title="Local árido" />
                </div>
            </div>
        </ContentSecondaryStyle>
    )
}