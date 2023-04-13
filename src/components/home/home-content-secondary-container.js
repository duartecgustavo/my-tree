import CorrectSVG from '../../assets/correct.svg';
import styled from 'styled-components';
import { Colors } from '../../styles/design.tokens';

const ContentSecondaryCard = styled.div`
    margin-bottom: 115px;
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

    
    @media (max-width: 768px) {

        margin-bottom: 70px;
    }

`;

export default function HomeContentSecondaryContainer(prop) {
    return (
        <ContentSecondaryCard color={prop.color} className="col-12 col-sm-6 col-lg-4">
            <h3>
                {prop.title}
            </h3>

            <div>
                <img src={prop.src} alt="" className="img-fluid" />
                <div className="bolinha"><img src={CorrectSVG} /></div>
            </div>
        </ContentSecondaryCard>
    )
}