import styled from 'styled-components';

const Container = styled.div`
`;

const Section = styled.section``;


export default function Home() {
    return (
        <>
            <Container className="bg-primary"> <h1>HEADER</h1></Container>
            <Container className="bg-danger">
                <Section>SESSÃO 1</Section>
                <Section>SESSÃO 2</Section>
                <Section>SESSÃO 3</Section>
            </Container>
            <Container className="bg-warning"> <h1>FOOTER</h1></Container>
        </>
    )
}