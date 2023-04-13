import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Background from '../../assets/Background.png';
import Img_login from '../../assets/imagem_login.png';
import { Colors } from '../../styles/design.tokens';

const Section = styled.div`
    padding: 5%;
    border-radius: 15px;
    background-color: ${Colors.WHITE};

    h3 {
        color: ${Colors.BLUE_MAIN};
    }

    p {
        font-size:18px;
    }

    .btn-primary {
        background-color: ${Colors.BLUE_MAIN};
        border-color: ${Colors.WHITE};
    }
`;

const LoginAreaStyle = styled.div`
    display: flex;
    align-items: center;

    height: 100vh;
    
    background-image: url(${Background});
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;

    .div-row{
        align-items: center;
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

export default function LoginArea() {
    return (
        <LoginAreaStyle>
            <div className="container">
                <div className="row div-row">
                    <section className="col-12 col-lg-6">
                        <img src={Img_login} alt="teste" className="img-fluid" />
                    </section>
                    <Section className="col-12 col-lg-6">

                        <h3>Bem-vindo</h3>
                        <p style={{ color: `${Colors.BLACK_GRAY}` }}>Para logar em sua conta insira o
                            e-mail e a senha.</p>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <NavLink to="home">
                                <button type="submit" class="btn btn-primary">Entrar</button>
                            </NavLink>
                            <button type="submit" class="btn btn-primary">Cadastre-se</button>
                        </form>
                    </Section>
                </div>
            </div>
        </LoginAreaStyle>
    )
}