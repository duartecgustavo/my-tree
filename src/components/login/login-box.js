import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Background from "../../assets/Background.png";
import Alert from "../../assets/alert.svg";
import Img_login from "../../assets/imagem_login.png";
import { useHandleState } from "../../hooks/useHandleState";
import { Colors } from "../../styles/design.tokens";

const Section = styled.div`
  padding: 5%;
  border-radius: 15px;
  background-color: ${Colors.WHITE};

  h3 {
    color: ${Colors.BLUE_MAIN};
  }

  p {
    font-size: 18px;
  }

  .btn-primary {
    background-color: ${Colors.BLUE_MAIN};
    border-color: ${Colors.WHITE};
  }

  .link-para-cadastro {
    color: ${Colors.BLACK};
    font-size: small;
    cursor: pointer;

    &:hover {
      color: ${Colors.BLUE_MAIN};
    }
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

  .div-row {
    align-items: center;
  }

  div > Section > h1,
  p {
    color: ${Colors.WHITE};
  }
  div > Section > p {
    font-weight: lighter;
    font-size: 28px;
  }

  @media (max-width: 768px) {
    div > Section > h1,
    p {
      color: ${Colors.WHITE};
      text-align: center;
    }
  }
`;

export default function LoginArea() {
  const { setView } = useHandleState();
  return (
    <LoginAreaStyle>
      <div className="container">
        <div className="row div-row">
          <section className="col-12 col-lg-6">
            <img src={Img_login} alt="teste" className="img-fluid" />
          </section>
          <Section className="col-12 col-lg-6">
            <div
              className="alert alert-warning"
              role="alert"
              style={{ display: "flex", gap: 10, alignItems: "center" }}
            >
              <img src={Alert} width={22} alt="teste" className="img-fluid" />
              <b>O LOGIN AINDA NÃO ESTA FUNCIONAL, BASTA CLICAR EM ENTRAR</b>
            </div>
            <h3>Bem-vindo</h3>
            <p style={{ color: `${Colors.BLACK_GRAY}` }}>
              Para logar em sua conta insira o e-mail e a senha.
            </p>
            <form>
              <div className="mb-3">
                <label className="form-label">Digite seu e-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Digite sua senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Senha"
                />
              </div>
              <div className="d-flex flex-column gap-2">
                <p
                  onClick={() => {
                    setView(false);
                  }}
                  className="link-para-cadastro"
                >
                  {" "}
                  Cadastre-se aqui
                </p>
                <NavLink to="home">
                  <button type="submit" className="btn btn-primary">
                    Entrar
                  </button>
                </NavLink>
              </div>
            </form>
          </Section>
        </div>
      </div>
    </LoginAreaStyle>
  );
}
