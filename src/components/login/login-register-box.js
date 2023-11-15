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
`;

const RegisterAreaStyle = styled.div`
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

export default function RegisterArea() {
  const { setView } = useHandleState();

  return (
    <RegisterAreaStyle>
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
              <b>O cadastro ainda não estão funcionando</b>
            </div>
            <h3>Registre-se</h3>
            <p style={{ color: `${Colors.BLACK_GRAY}` }}>
              Preencha os campos abaixo para se registrar.
            </p>
            <form>
              <div class="mb-3">
                <label className="form-label">Digite seu nome:</label>
                <input type="" className="form-control" placeholder="Nome" />
              </div>
              <div className="mb-3">
                <label className="form-label">Digite seu telefone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Telefone"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Digite sua data de nascimento
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Digite seu Email:</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Digite uma senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Senha"
                />
              </div>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setView(true);
                }}
              >
                Voltar ao login
              </button>
            </form>
          </Section>
        </div>
      </div>
    </RegisterAreaStyle>
  );
}
