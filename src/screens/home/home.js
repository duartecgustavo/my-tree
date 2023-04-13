import { NavLink } from 'react-router-dom';
import Img_home from '../../assets/imagem_home.png';
import Img1 from '../../assets/img1.png';
import Img2 from '../../assets/img2.png';
import Img3 from '../../assets/img3.png';
import CorrectSVG from '../../assets/correct.svg';
import { ContentPrimary, ContentSecondary, ContentSecondaryCard, ContentThird, Footer, Navbar, Section } from './styles';
import { Colors } from '../../styles/design.tokens';

function ContentSecondaryContainer(prop) {
    return (
        <ContentSecondaryCard color={prop.color} className="col">
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

export default function Home() {
    return (
        <>
            <Navbar className="">
                <div className="container">
                    <h1>myTree</h1>
                    <NavLink to="/">
                        Login/Cadastre-se
                    </NavLink>
                </div>
            </Navbar>
            <ContentPrimary>
                <div className="container">
                    <Section className="section-home-titles">
                        <h1>Bem-vindo</h1>
                        <p>Embarque em um novo mundo!</p>
                    </Section>
                    <Section>
                        <img src={Img_home} alt="teste" />
                    </Section>
                </div>
            </ContentPrimary>
            <ContentSecondary>
                <div className="container">
                    <p>
                        Uma maneira diferente de aprender a cuidar <br />do meio ambiente  com lições diárias.
                    </p>
                    <p>
                        Unidade 1
                    </p>
                    <div className="row">
                        <ContentSecondaryContainer color={Colors.BLUE_LIGHT2} src={Img1} title="Cuide de sua orquidia" />
                        <ContentSecondaryContainer color={Colors.PINK} src={Img2} title="Compatilhe com seus amigos" />
                        <ContentSecondaryContainer color={Colors.ORANGE} src={Img3} title="Como realizar adubo" />
                    </div>
                    <div className="row" style={{ marginBottom: "100px" }}>
                        <ContentSecondaryContainer color={Colors.GREEN} src={Img1} title="Verduras" />
                        <ContentSecondaryContainer color={Colors.YELLOW} src={Img2} title="Jardinagem" />
                        <ContentSecondaryContainer color={Colors.RED} src={Img3} title="Local árido" />
                    </div>
                </div>
            </ContentSecondary>
            <ContentThird>
                <div className="container">

                    <Section className="section-second-title-blue">
                        <p>Plante sua árvore e veja como ela está sendo cuidada.</p>
                    </Section>
                    <Section className="section-second-blue">
                        <Section className="">
                            <div>Quem esta cuidando?</div>
                        </Section>
                        <Section>
                            <div>Quem esta cuidando?</div>
                            <div>Consumo de CO2</div>
                            <div>Contribuir com uma nova árvore</div>
                        </Section>
                    </Section>
                </div>
            </ContentThird>
            <Footer>
                <div>
                    <a href="/home">Sobre nós</a>
                    <a href="/home">Contato</a>
                    <a href="/home">Newsletter</a>
                    <a href="/home">Mapa</a>
                </div>
                <p>©2023 • myTree • Todos os direitos reservados.</p>
            </Footer>
        </>
    )
}