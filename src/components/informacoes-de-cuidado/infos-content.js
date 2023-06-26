import styled from 'styled-components';
import { Colors } from '../../styles/design.tokens';

const ContentInfosStyle = styled.div`
    display: flex;
    align-items: center;

    background-color: ${Colors.WHITE};

    color: black;

    h1{
        text-transform: capitalize;
    }

    p {
        font-size: 28px;
        font-weight: lighter;
    }

    .section-home-titles {
        color: red;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

const Section = styled.section`

`;


export default function InfosContent(props) {
    console.log("props.content.length", props.video)
    return (
        <ContentInfosStyle>
            <div className="container p-5">
                <div className="row">
                    <Section className="col-12 text-center mb-5">
                        <h1>{props.title}</h1>
                    </Section>
                    {props.content.map((item) => {
                        return (
                            <Section className="col-12" key={item.id}>
                                <p>{item}</p>
                            </Section>
                        );
                    })}
                    {props.video.length === 0 ? "" : (
                        <div className="col-12 d-flex justify-content-center mt-5 p-5 rounded" style={{ backgroundColor: "#BBEAFB" }}>
                            <iframe
                                src={props.video}
                                width="800px"
                                height="400px"
                                title="Video"
                                className="object-fit-contain"
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </ContentInfosStyle >
    )
}